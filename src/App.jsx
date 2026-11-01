import { useState } from 'react';
import './App.css'; // <-- Pastikan ini ada
import Header from './components/Header';
import MenuSummary from './components/MenuSummary';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';

function App() {
  const [menus, setMenus] = useState([
    { id: 1, nama: 'Mochi Bites', varian: 'Saus Coklat Oreo', harga: 10000, stok: 15 },
    { id: 2, nama: 'Mochi Bites', varian: 'Matcha Crumb', harga: 12000, stok: 10 }
  ]);

  const handleAddMenu = (newMenu) => {
    setMenus([...menus, newMenu]);
  };

  return (
    <div className="app-container">
      <Header />
      <MenuSummary totalMenu={menus.length} />
      <MenuForm onAddMenu={handleAddMenu} />
      <MenuList menus={menus} />
    </div>
  );
}

export default App;