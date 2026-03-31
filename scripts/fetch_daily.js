const axios = require('axios');
const fs = require('fs');
const path = require('path');

// الرابط إلى الملف الذي سيخزن البيانات ليراها جميع الزوار
const dataFilePath = path.join(__dirname, '../data/daily_events.json');

async function fetchFromAnthropic() {
    const todayStr = new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const promptText = `Today is ${todayStr}.
You are a professional human rights documentation researcher. Search the web for recent news (last 48-72 hours) about violence, crimes, massacres, attacks, persecution, or serious human rights violations targeting Muslims anywhere in the world.

Find 3-5 distinct, documented events or ongoing situations. For each event provide:
- A clear, factual title
- Exact or approximate date
- Geographic location (country and city/region)
- Detailed description (at least 150 words) covering: what happened, who was involved, scale of victims/impact, context, and significance
- Number of victims (killed/injured/displaced) if known, or describe the scale
- 2-3 reliable source references with realistic URLs from news agencies, HRW, Amnesty, UN, Wikipedia, BBC, Al Jazeera, Reuters, etc.

Respond ONLY with a valid JSON array. No markdown, no backticks, no extra text. Format:
[
  {
    "titleAr": "...", "titleEn": "...", "dateStr": "...", "locationAr": "...", "locationEn": "...",
    "region": "...", "victims": "...", "descriptionAr": "...", "descriptionEn": "...",
    "sources": [ { "title": "...", "url": "..." } ]
  }
]`;

    try {
        const response = await axios.post('https://api.anthropic.com/v1/messages', {
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 4000,
            messages: [{ role: "user", content: promptText }]
        }, {
            headers: {
                'x-api-key': process.env.ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json'
            }
        });

        // استخراج النص من الرد
        const rawText = response.data.content.find(b => b.type === "text").text;
        
        // البحث عن الـ JSON داخل النص
        const jsonMatch = rawText.match(/\[[\s\S]*\]/);
        if (!jsonMatch) throw new Error("لم يتم العثور على صيغة JSON صحيحة.");
        
        const newEvents = JSON.parse(jsonMatch[0]);

        // قراءة الأحداث القديمة (إن وجدت)
        let allEvents = [];
        if (fs.existsSync(dataFilePath)) {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            allEvents = JSON.parse(fileData);
        }

        // دمج الأحداث الجديدة مع القديمة
        allEvents = [...newEvents, ...allEvents];

        // حفظ الملف المحدث
        fs.writeFileSync(dataFilePath, JSON.stringify(allEvents, null, 2), 'utf8');
        console.log("✅ تم جلب وحفظ أحداث اليوم بنجاح.");

    } catch (error) {
        console.error("❌ فشل الجلب:", error.response ? error.response.data : error.message);
        process.exit(1); // إخبار GitHub بوجود خطأ
    }
}

fetchFromAnthropic();
