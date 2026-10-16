/* Turunan tampilan dari data bisnis — TIDAK mengubah harga, nama, atau label di business.ts.
   Menambah kategori filter + slug foto lokal untuk halaman menu journal. */
import { menuGroups } from './business';

export const seedFor = (name: string) =>
  `ogi-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

/* Peta kategori dari nama item (label Teruji/Estimasi & nama item tetap apa adanya). */
const catOf = (name: string): string => {
  if (/kopi susu/i.test(name)) return 'kopi';
  if (/matcha|tea/i.test(name)) return 'minuman';
  if (/pisang goreng/i.test(name)) return 'dessert';
  return 'makanan';
};

export type MenuItem = { name: string; price: string; badge: string; desc: string; cat: string; seed: string };

export const menuItems: MenuItem[] = menuGroups.flatMap((g) =>
  g.items.map((m) => ({ ...m, cat: catOf(m.name), seed: seedFor(m.name) })),
);

export const categoryCounts = [
  { id: 'makanan', label: 'Makanan', count: menuItems.filter((m) => m.cat === 'makanan').length },
  { id: 'minuman', label: 'Minuman', count: menuItems.filter((m) => m.cat === 'minuman').length },
  { id: 'kopi', label: 'Kopi', count: menuItems.filter((m) => m.cat === 'kopi').length },
  { id: 'dessert', label: 'Dessert', count: menuItems.filter((m) => m.cat === 'dessert').length },
];

/* Foto suasana lokal (Wikimedia Commons, lisensi bebas). Ilustrasi — bukan foto lokasi OGI. */
export type Photo = { key: string; src: string; w: number; h: number; alt: string };

const P = (key: string, w: number, h: number, alt: string): Photo => ({
  key,
  src: `/images/ogi-${key}.webp`,
  w,
  h,
  alt,
});

export const photos = {
  interior: P('interior-1', 800, 600, 'Ilustrasi interior kafe: meja, kursi, dan area kasir — bukan foto lokasi OGI'),
  outdoor: P('outdoor-1', 800, 594, 'Ilustrasi teras kafe outdoor dengan meja dan kursi — bukan foto lokasi OGI'),
  meja: P('meja-1', 800, 600, 'Ilustrasi meja makan yang ditata rapi di restoran — bukan foto lokasi OGI'),
  kopi: P('kopi-1', 800, 600, 'Ilustrasi secangkir espresso di meja kafe — bukan foto menu OGI'),
  suasa: P('suasa-1', 800, 600, 'Ilustrasi orang makan dan menunggu di meja restoran — bukan foto lokasi OGI'),
  spot: P('spot-1', 800, 533, 'Ilustrasi suasana pagi sibuk di dalam kafe — bukan foto lokasi OGI'),
};

/* Cerita suasana (zig-zag) di beranda & galeri. */
export const gallery = [
  { ...photos.interior, caption: 'Ruang dalam — meja, kursi, dan konter' },
  { ...photos.outdoor, caption: 'Teras outdoor untuk sore dan malam' },
  { ...photos.meja, caption: 'Meja ditata untuk makan bersama' },
  { ...photos.kopi, caption: 'Kopi dan minuman hangat' },
  { ...photos.suasa, caption: 'Makan bareng teman dan keluarga' },
  { ...photos.spot, caption: 'Pagi sibuk di dalam kafe' },
];
