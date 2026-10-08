export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Menangani Request pengiriman formulir saat tombol GENERATE diklik
    if (url.pathname === '/api/generate-gemini' && request.method === 'POST') {
      try {
        const tokenGemini = env.GEMINI_API_KEY;
        // Proses integrasi model Gemini AI Anda di sini...
        const urlDesainOutput = "https://unsplash.com";

        return new Response(JSON.stringify({ success: true, imageUrl: urlDesainOutput }), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
      }
    }

    // PENTING: Loloskan aset index.html agar tombol-tombol tidak freeze
    return env.ASSETS.fetch(request);
  }
};
