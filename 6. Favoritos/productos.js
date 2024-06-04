export const obtenerProductos = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/SarisM/Proyecto-final-de-programaci-n/main/4.%20Main/data.json"
    );
    const data = await response.json();
    return data;
  };
  