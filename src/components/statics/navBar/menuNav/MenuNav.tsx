const MenuNav: React.FC = () => {
  return (
    <>
      <div className="ml-4 mr-auto">
        <div className="relative rounded-md bg-white">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
           
          </div>
          <input
            type="text"
            placeholder="Buscar produtos e marcas"
            aria-label="Buscar produtos, marcas e muito mais..."
            className="w-full pl-10 pr-40 py-2 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </>
  );
};

export default MenuNav;