const fs = require("fs");
const path = require("path");

// Función para escanear las carpetas en images/ y generar las categorías automáticamente
function generateItemsData() {
	const imagesDir = path.join(__dirname, "images");
	const categories = {};

	try {
		// Leer todas las carpetas en el directorio images/
		const folders = fs
			.readdirSync(imagesDir, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		console.log(`Encontradas ${folders.length} categorías:`, folders);

		// Para cada carpeta, leer las imágenes dentro
		folders.forEach((folder) => {
			const folderPath = path.join(imagesDir, folder);
			const images = fs
				.readdirSync(folderPath)
				.filter((file) => {
					const ext = path.extname(file).toLowerCase();
					return [".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(ext);
				})
				.map((file) => ({
					name: path.parse(file).name.replace(/_/g, " "), // Convertir guiones bajos a espacios
					url: `/images/${folder}/${file}`,
				}));

			if (images.length > 0) {
				categories[folder] = images;
				console.log(`  ${folder}: ${images.length} imágenes`);
			}
		});

		// Generar el archivo de datos
		const jsContent = `// Archivo generado automáticamente - No editar manualmente
// Para actualizar, ejecuta: node generate-items.js

const ITEMS_DATA = ${JSON.stringify(categories, null, 2)};

// Función para obtener todas las categorías
function getCategories() {
    return Object.keys(ITEMS_DATA);
}

// Función para obtener todos los elementos de una categoría
function getItemsByCategory(category) {
    return ITEMS_DATA[category] || [];
}

// Función para obtener todos los elementos
function getAllItems() {
    return Object.values(ITEMS_DATA).flat();
}

// Función para buscar elementos por nombre
function searchItems(query) {
    const allItems = getAllItems();
    const searchQuery = query.toLowerCase();
    return allItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery)
    );
}

// Exportar para uso en el navegador
if (typeof window !== 'undefined') {
    window.ITEMS_DATA = ITEMS_DATA;
    window.getCategories = getCategories;
    window.getItemsByCategory = getItemsByCategory;
    window.getAllItems = getAllItems;
    window.searchItems = searchItems;
}
`;

		// Escribir el archivo JavaScript
		fs.writeFileSync("items-data.js", jsContent);

		console.log("\n✅ Archivo items-data.js generado exitosamente!");
		console.log(`📊 Total: ${Object.keys(categories).length} categorías, ${Object.values(categories).flat().length} imágenes`);

		return categories;
	} catch (error) {
		console.error("❌ Error generando datos:", error);
		return null;
	}
}

// Ejecutar si se llama directamente
if (require.main === module) {
	generateItemsData();
}

module.exports = { generateItemsData };
