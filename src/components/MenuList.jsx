import MenuCard from './MenuCard';

export default function MenuList({ menus }) {
  if (menus.length === 0) {
    return (
      <div className="menu-list">
        <p className="empty-state">Belum ada data Menu yang ditambahkan.</p>
      </div>
    );
  }

  return (
    <div className="menu-list">
      {menus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} />
      ))}
    </div>
  );
}