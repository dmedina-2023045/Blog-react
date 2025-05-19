import { useRoutes } from 'react-router-dom';
import { route } from './routes';
import Navbar from './components/NavBar';
import { Toaster } from 'react-hot-toast';

function App() {
const elements = useRoutes(route);

  return (
    <div className="flex flex-col h-screen bg-[#f5f7fa] text-[#1f2937]">
      {/* Navbar con sombra y fondo blanco fijo */}
      <Navbar />

      
        {/* Área principal de contenido con diseño limpio y scroll */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#ffffff] rounded-tl-3xl shadow-inner">
          {elements}
          <Toaster position="bottom-right" toastOptions={{
            style: {
              background: '#f1f5f9',
              color: '#1e293b',
              border: '1px solid #e2e8f0',
              padding: '12px 16px',
              fontSize: '0.875rem'
            }
          }} />
        </main>
      </div>
  );
}

export default App;
