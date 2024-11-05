import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white flex-shrink-0">
      <div className="p-4 text-xl font-semibold">Produtos</div>
      <nav className="flex flex-col space-y-2 p-4">
        <Link href="/" className="px-4 py-2 bg-blue-600 rounded-md">Produtos</Link>
        <Link href="/clientes" className="px-4 py-2 hover:bg-gray-700 rounded-md">Clientes</Link>
        <Link href="/cadastro" className="px-4 py-2 hover:bg-gray-700 rounded-md">Cadastro</Link>
        <Link href="/editar" className="px-4 py-2 hover:bg-gray-700 rounded-md">Editar Clientes</Link>
        <Link href="/produtos" className="px-4 py-2 hover:bg-gray-700 rounded-md">Editar Produtos</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
