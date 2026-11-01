import { useState } from 'react';

export default function MenuForm({ onAddMenu }) {
  const [nama, setNama] = useState('');
  const [varian, setVarian] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !harga) return;

    const newMenu = {
      id: Date.now(),
      nama,
      varian,
      harga: parseInt(harga),
      stok: parseInt(stok)
    };

    onAddMenu(newMenu);
    setNama(''); setVarian(''); setHarga(''); setStok('');
  };

  return (
    <form className="modern-form" onSubmit={handleSubmit}>
      <h3>Tambah Menu Baru</h3>
      <div className="form-grid">
        <input className="modern-input form-full-width" type="text" placeholder="Nama Menu (mis: Mochi Bites)" value={nama} onChange={(e) => setNama(e.target.value)} required />
        <input className="modern-input form-full-width" type="text" placeholder="Varian Rasa (mis: Matcha, Coklat)" value={varian} onChange={(e) => setVarian(e.target.value)} required />
        <input className="modern-input" type="number" placeholder="Harga (Rp)" value={harga} onChange={(e) => setHarga(e.target.value)} required />
        <input className="modern-input" type="number" placeholder="Jumlah Stok" value={stok} onChange={(e) => setStok(e.target.value)} required />
        <button className="btn-submit" type="submit">Tambah Menu</button>
      </div>
    </form>
  );
}