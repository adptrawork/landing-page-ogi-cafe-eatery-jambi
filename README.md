# OGI Cafe and Eatery — Landing Page Jambi

Astro + Tailwind, Full SEO 100%, 1 repo per 1 bisnis.

## Dev
```bash
npm install
npm run dev
npm run build
```

## Deploy (TODO-DEPLOY, belum dieksekusi)
- Framework Preset: Astro
- Build Command: `npm run build`
- Output: `dist/`
- Connect to Git di Cloudflare Pages → pilih repo ini
- Custom domain + SSL otomatis setelah setup domain

## Sumber Gambar (Wikimedia Commons, bebas lisensi)

Foto menu di `public/images/` diunduh dari Wikimedia Commons (URL `upload.wikimedia.org`),
dikompres lebar maks 800px JPEG ≤100KB. Atribusi sesuai lisensi masing-masing.

| Item | File lokal | Sumber | Ukuran | Lisensi |
|---|---|---|---|---|
| Chicken Katsu Don | `ogi-chicken-katsu-don.jpg` | [Chicken Katsu and Rice](https://commons.wikimedia.org/wiki/File:Chicken_Katsu_and_Rice.jpg) oleh HurricaneIcy | 800x532, 60KB | CC BY-SA 4.0 |
| Chicken Quesadilla | `ogi-chicken-quesadilla.jpg` | [Chicken quesadilla](https://commons.wikimedia.org/wiki/File:Chicken_quesadilla.jpg) oleh Jon Sullivan | 800x600, 92KB | Public domain |
| Nasi Goreng OGI Spesial | `ogi-nasi-goreng-ogi-spesial.jpg` | [Nasi goreng 2](https://commons.wikimedia.org/wiki/File:Nasi_goreng_2.jpg) oleh Rdiyansyah | 800x533, 45KB | CC BY-SA 4.0 |
| Ayam Geprek Sambal Matah + Nasi | `ogi-ayam-geprek-sambal-matah-nasi.jpg` | [Ayam Geprek Uyat](https://commons.wikimedia.org/wiki/File:Ayam_Geprek_Uyat.jpg) oleh Supardisahabu | 800x520, 76KB | CC BY-SA 4.0 |
| Spaghetti Aglio e Olio / Carbonara | `ogi-spaghetti-aglio-e-olio-carbonara.jpg` | [Espaguetis carbonara](https://commons.wikimedia.org/wiki/File:Espaguetis_carbonara.jpg) oleh Javiersomoza | 800x533, 84KB | CC BY-SA 4.0 |
| Burger + French Fries | `ogi-burger-french-fries.jpg` | [Cheeseburgers and french fries](https://commons.wikimedia.org/wiki/File:Cheeseburgers_and_french_fries.jpg) oleh jeffreyw (Flickr) | 800x519, 78KB | CC BY 2.0 |
| Matcha Latte Hot/Ice | `ogi-matcha-latte-hot-ice.jpg` | [Matcha tea latte with rosetta latte art](https://commons.wikimedia.org/wiki/File:Matcha_tea_latte_with_rosetta_latte_art.jpg) oleh Irvan Ary Maulana | 800x450, 53KB | CC BY-SA 4.0 |
| Kopi Susu Gula Aren | `ogi-kopi-susu-gula-aren.jpg` | [Es Kopi Susu Gula Aren](https://commons.wikimedia.org/wiki/File:Es_Kopi_Susu_Gula_Aren.jpg) oleh Happywu | 800x1422, 95KB | CC BY-SA 4.0 |
| Pisang Goreng Coklat Keju | `ogi-pisang-goreng-coklat-keju.jpg` | [Pisang goreng (fried bananas)](https://commons.wikimedia.org/wiki/File:Pisang_goreng_(fried_bananas).jpg) oleh Wiki Farazi | 800x480, 43KB | CC BY-SA 4.0 |
| Thai Tea / Lemon Tea | `ogi-thai-tea-lemon-tea.jpg` | [Cha yen](https://commons.wikimedia.org/wiki/File:Cha_yen.JPG) oleh Takeaway | 800x800, 55KB | CC BY-SA 3.0 |

Catatan: `picsum.photos` masih dipakai di hero (`index.astro`) dan foto suasana/galeri
sebagai placeholder — belum diganti foto asli (di luar cakupan 10 foto menu).
