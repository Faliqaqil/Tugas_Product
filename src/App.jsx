import { useState, useEffect } from 'react';
import './App.css'; 
import Header from './components/Header';
import MenuSummary from './components/MenuSummary';
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';

function App() {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Fungsi untuk mengambil data dari API (AJAX)
  const fetchMenus = async () => {
    setIsLoading(true); 
    setIsError(false); 

    try {

      await new Promise(resolve => setTimeout(resolve, 1500));


      const response = await fetch('[https://jsonplaceholdeeeeer.typicode.com/posts?_limit=4](https://jsonplaceholdeeeeer.typicode.com/posts?_limit=4)');
      
      if (!response.ok) {
        throw new Error('Gagal mengambil data dari API');
      }
      
      const data = await response.json();
      

      const formattedData = data.map(item => ({
        id: item.id,
        nama: item.title.substring(0, 15) + '...', 
        varian: 'Varian Mock API',
        harga: item.id * 5000 + 10000, 
        stok: item.id * 3
      }));
      
      setMenus(formattedData);
    } catch (error) {
      setIsError(true); 
    } finally {
      setIsLoading(false); 
    }
  };

  // Jalankan fetchMenus saat komponen pertama kali dirender
  useEffect(() => {
    fetchMenus();
  }, []);

  const handleAddMenu = (newMenu) => {
    setMenus([...menus, newMenu]);
  };

  return (
    <div className="app-container">
      <Header />
      
      {/* KONDISI LOADING */}
      {isLoading && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--primary)', fontWeight: '500' }}>
          <p>⏳ Mengambil data menu dari server...</p>
        </div>
      )}

      {/* KONDISI ERROR */}
      {isError && (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#fff0ed' }}>
          <p style={{ color: '#d35400', fontWeight: '500', marginBottom: '15px' }}>❌ Gagal memuat data. Periksa koneksi internet Anda.</p>
          <button className="btn-submit" onClick={fetchMenus} style={{ width: 'auto', padding: '10px 20px' }}>
            🔄 Coba Lagi
          </button>
        </div>
      )}

      {/* KONDISI SUCCESS */}
      {!isLoading && !isError && (
        <>
          <MenuSummary totalMenu={menus.length} />
          <MenuForm onAddMenu={handleAddMenu} />
          <MenuList menus={menus} />
        </>
      )}
    </div>
  );
}

export default App;