(async () => {
    const allowedCountries = ['DK', 'SE', 'NO']; // اختصرات الدول المسموح بها (مثلاً: DK = Denmark)

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const userCountry = data.country;

        if (!allowedCountries.includes(userCountry)) {
            // إعادة التوجيه إلى صفحة أخرى إذا كان البلد غير مسموح
            window.location.href = 'https://google.com';  // يمكنك تغيير الرابط هنا
        }
    } catch (error) {
        console.error('Errur:', error);
    }
})();
