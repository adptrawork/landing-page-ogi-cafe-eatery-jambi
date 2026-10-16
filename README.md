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

## Design system

- **Konsep:** Mediterranean menu journal — hangat, kuliner, terarah. Halaman `/menu` adalah bintangnya.
- **Font:** `Fraunces` (display/headline, opsz variable) + `Instrument Sans` (body/UI), dimuat non-blocking dari Google Fonts (`preconnect` + `display=swap`).
- **Palet:** `--paper #F7F2E8`, `--paper-2 #E5D9C6`, `--ink #2D3528`, `--ink-soft rgba(45,53,40,.62)`, `--olive #586844`, `--accent #99482F` (satu accent terracotta).
- **Struktur `/` dan `/menu`:** hero editorial asimetris → filter kategori interaktif → daftar menu dua kolom (gaya menu cetak) → cerita suasana zig-zag → kategori/jam ramai ber-rule → lokasi + MapFacade → footer NAP.

## Sumber Gambar (Wikimedia Commons, bebas lisensi)

Foto di `public/images/` diunduh dari Wikimedia Commons (URL `upload.wikimedia.org`),
dikompres lebar maks 800px JPEG ≤100KB. Atribusi sesuai lisensi masing-masing.
Semua foto suasana adalah **ilustrasi**, bukan foto lokasi/menu OGI (tercantum di `alt` dan caption).

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
| Suasana: ruang dalam | `ogi-interior-1.jpg` | [Figaro Coffee shop interior, Dasmariñas](https://commons.wikimedia.org/wiki/File:Figaro_Coffee_shop_interior_in_Salawag,_Dasmari%C3%B1as,_Cavite_%E2%80%94_19_Mar_2022.jpg) oleh UndueMarmot | 800x600, 85KB | CC BY 4.0 |
| Suasana: teras outdoor | `ogi-outdoor-1.jpg` | [Boathouse Ōhori Park café terrace](https://commons.wikimedia.org/wiki/File:Boathouse_%C5%8Chori_Park_The_caf%C3%A9_terrace_%C5%8Chorik%C5%8Den_Ch%C5%AB%C5%8D-ku_Fukuoka_20260609_173537.jpg) oleh Hirho | 800x594, 85KB | CC BY 4.0 |
| Suasana: meja makan | `ogi-meja-1.jpg` | [Table setting in a restaurant](https://commons.wikimedia.org/wiki/File:Table_setting_in_a_restaurant.JPG) oleh User:Mattes | 800x600, 92KB | Public domain |
| Suasana: kopi | `ogi-kopi-1.jpg` | [Lou's Cafe 1 Shot of Espresso](https://commons.wikimedia.org/wiki/File:Lou%27s_Cafe_1_Shot_of_Espresso_(23228881916).jpg) oleh Willis Lam | 800x600, 82KB | CC BY-SA 2.0 |
| Suasana: orang makan | `ogi-suasa-1.jpg` | [At restaurant table](https://commons.wikimedia.org/wiki/File:At_restaurant_table.jpg) oleh Saral Shots | 800x600, 91KB | CC BY-SA 4.0 |
| Suasana: pagi sibuk | `ogi-spot-1.jpg` | [DFC 3995 Busy morning at a cozy street-side café](https://commons.wikimedia.org/wiki/File:DFC_3995_Busy_morning_at_a_cozy_street-side_caf%C3%A9_-_patrons_chat_while_staff_prepare_fresh_orders_behind_the_counter.jpg) oleh PattayaPatrol | 800x533, 87KB | CC BY-SA 4.0 |

Catatan: seluruh gambar `picsum.photos` sudah dihapus dari `src/pages` dan `DishCard.astro`;
hero `/` dan `/galeri` kini memakai foto lokal di atas. Harga menu berasal dari arsip 2023 dan
tetap dilabeli **Teruji**/**Estimasi** (jangan dihapus).
