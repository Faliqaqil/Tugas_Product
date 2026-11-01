export default function MenuCard({ menu }) {
  return (
    <div className="menu-card">
      <div className="menu-info">
        <h3>{menu.nama}</h3>
        <p>Varian: {menu.varian}</p>
      </div>
      <div className="menu-price">
        <p className="price">Rp {menu.harga.toLocaleString('id-ID')}</p>
        <span className="stock">Stok: {menu.stok}</span>
      </div>
    </div>
  );
}