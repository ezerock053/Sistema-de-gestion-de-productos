const BASE_URL = 'http://localhost:5000';

// Todos los productos
export const fetchProductos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/productos`);
    if (!response.ok) throw new Error('No se pudieron cargar los productos');
    return await response.json();
  } catch (error) {
    console.error("Error al obtener productos:", error.message);
    return [];
  }
};

// Producto por ID
export const fetchProductoById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/productos/${id}`);
    if (!response.ok) throw new Error(`No se pudo cargar el producto con id ${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener el producto:", error.message);
    return null;
  }
};

// Fabricantes de un producto
export const fetchFabricantesByProducto = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/productos/${id}/fabricantes`);
    if (!response.ok) throw new Error(`No se pudieron cargar los fabricantes del producto ${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener fabricantes:", error.message);
    return [];
  }
};

// Componentes de un producto
export const fetchComponentesByProducto = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/productos/${id}/componentes`);
    if (!response.ok) throw new Error(`No se pudieron cargar los componentes del producto ${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener componentes:", error.message);
    return [];
  }
};

// Todos los fabricantes
export const fetchAllFabricantes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/fabricantes`);
    if (!response.ok) throw new Error('No se pudieron cargar los fabricantes');
    return await response.json();
  } catch (error) {
    console.error("Error al obtener fabricantes:", error.message);
    return [];
  }
};

// Todos los componentes
export const fetchAllComponentes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/componentes`);
    if (!response.ok) throw new Error('No se pudieron cargar los componentes');
    return await response.json();
  } catch (error) {
    console.error("Error al obtener componentes:", error.message);
    return [];
  }
};
