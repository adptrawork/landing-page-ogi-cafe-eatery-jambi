export const business = {
  name: 'OGI Cafe and Eatery',
  slug: 'ogi-cafe-eatery',
  category: 'Restoran & Kafe',
  city: 'Kota Jambi',
  rating: 4.8,
  reviewCount: 670,
  phone: '6282280523250', // TERVERIFIKASI 0822-8052-3250
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=OGI+Cafe+and+Eatery+Jambi',
  mapsEmbed: 'https://maps.google.com/maps?q=OGI%20Cafe%20and%20Eatery%20Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'Jl. Empu Sendok No.54, Solok Sipin, Danau Sipin, Kota Jambi 36124',
  hours: 'Sen–Kam & Min 11.00–21.30, Jum–Sab 11.00–22.30 WIB',
  instagram: 'https://www.instagram.com/ogi.cafeneatery',
  priceRange: 'Rp50–75rb/orang',
  title: 'OGI Cafe Jambi Danau Sipin — E-Menu & Reservasi Meja',
  description:
    'OGI Cafe and Eatery Danau Sipin Jambi rating 4.8 (670 ulasan): menu Nusantara–Western–Jepang, parkir luas, reservasi 0822-8052-3250.',
  canonicalPath: '/',
  ogImage: '/og-ogi.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const menuGroups = [
  {
    category: 'Makanan Favorit',
    items: [
      { name: 'Chicken Katsu Don', price: 'Rp 38.000', badge: 'Teruji', desc: 'Disebut di review pengunjung.' },
      { name: 'Chicken Quesadilla', price: 'Rp 35.000', badge: 'Teruji', desc: 'Disebut di review pengunjung.' },
      { name: 'Nasi Goreng OGI Spesial', price: 'Rp 32.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
      { name: 'Ayam Geprek Sambal Matah + Nasi', price: 'Rp 30.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
      { name: 'Spaghetti Aglio e Olio / Carbonara', price: 'Rp 35.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
      { name: 'Burger + French Fries', price: 'Rp 38.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
    ],
  },
  {
    category: 'Snack & Minuman',
    items: [
      { name: 'Matcha Latte Hot/Ice', price: 'Rp 25.000', badge: 'Teruji', desc: 'Disebut di review pengunjung.' },
      { name: 'Kopi Susu Gula Aren', price: 'Rp 22.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
      { name: 'Pisang Goreng Coklat Keju', price: 'Rp 25.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
      { name: 'Thai Tea / Lemon Tea', price: 'Rp 12.000–18.000', badge: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.' },
    ],
  },
];

export const gallery = [
  { seed: 'ogi-interior-1', alt: 'Interior cozy OGI Cafe Jambi', caption: 'Indoor cozy — ganti foto asli' },
  { seed: 'ogi-outdoor-1', alt: 'Area outdoor OGI Cafe Danau Sipin', caption: 'Outdoor nongkrong — ganti foto asli' },
  { seed: 'ogi-food-1', alt: 'Chicken katsu don OGI Cafe', caption: 'Menu andalan — ganti foto asli' },
  { seed: 'ogi-coffee-1', alt: 'Matcha latte dan kopi susu OGI', caption: 'Minuman signature — ganti foto asli' },
  { seed: 'ogi-spot-1', alt: 'Spot foto instagramable OGI Cafe', caption: 'Spot foto — ganti foto asli' },
  { seed: 'ogi-group-1', alt: 'Area grup keluarga OGI Cafe Jambi', caption: 'Area grup — ganti foto asli' },
];
