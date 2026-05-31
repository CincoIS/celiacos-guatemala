// Global site data for Celiacos Guatemala.
// Independent, evidence-based information resource on celiac disease in
// Guatemala, and a public-policy advocacy initiative. No commercial interest.
// Import this data from anywhere using the `import` keyword.

export const SITE_TITLE = "Celiacos Guatemala";
export const SITE_DESCRIPTION =
	"Recurso independiente de información basada en evidencia sobre la enfermedad celíaca en Guatemala, e iniciativa de incidencia por la política pública que el país aún no tiene.";

export const ORG = {
	name: "Celiacos Guatemala",
	tagline: "Información con evidencia, incidencia con propósito",
};

export const NAV_LINKS = [
	{ href: "/", label: "Inicio" },
	{ href: "/que-es-la-celiaquia", label: "La celiaquía" },
	{ href: "/vivir-sin-gluten", label: "Vivir sin gluten" },
	{ href: "/incidencia", label: "Incidencia" },
	{ href: "/blog", label: "Recursos" },
];

// Secondary links shown in the footer.
export const FOOT_LINKS = [
	{ href: "/referencias", label: "Referencias y fuentes" },
	{ href: "/acerca", label: "Acerca del proyecto" },
];

// Honest, sourced figures — not impact claims.
export const STATS = [
	{
		value: "0.46–0.64 %",
		label: "prevalencia estimada de celiaquía en Latinoamérica (meta-análisis, PLoS ONE 2015)",
	},
	{
		value: "Sin registro",
		label: "Guatemala no cuenta con un estudio poblacional ni un registro nacional propio",
	},
	{
		value: "0 leyes",
		label: "no existe una ley de celiaquía ni una norma nacional de etiquetado «sin gluten»",
	},
	{
		value: "Maíz",
		label: "la tortilla de maíz, base de la dieta guatemalteca, es naturalmente sin gluten",
	},
];

// Principles that guide the project.
export const VALUES = [
	{
		icon: "book",
		title: "Evidencia",
		text: "Cada afirmación se apoya en literatura médica, normativa vigente o fuentes verificables, citadas y enlazadas.",
	},
	{
		icon: "scale",
		title: "Independencia",
		text: "No vendemos productos ni promovemos marcas. La información se ofrece sin conflicto de interés comercial.",
	},
	{
		icon: "flag",
		title: "Incidencia",
		text: "Documentamos los vacíos de política pública para impulsar registro epidemiológico, etiquetado y cobertura.",
	},
	{
		icon: "leaf",
		title: "Contexto local",
		text: "Partimos de la realidad guatemalteca: la tortilla de maíz, el costo de lo importado y la contaminación cruzada.",
	},
];

// Lines of work (replaces the old NGO "programs").
export const FOCUS = [
	{
		id: "informacion",
		icon: "book",
		title: "Información basada en evidencia",
		summary:
			"Qué es la enfermedad celíaca, cómo se diagnostica y cómo se vive sin gluten, explicado con fuentes verificables.",
		href: "/que-es-la-celiaquia",
	},
	{
		id: "diagnostico",
		icon: "stethoscope",
		title: "Ruta de diagnóstico",
		summary:
			"La secuencia serología → biopsia y dónde se realiza en Guatemala, como orientación que no sustituye al criterio médico.",
		href: "/que-es-la-celiaquia#diagnostico",
	},
	{
		id: "vida",
		icon: "leaf",
		title: "Vida sin gluten en Guatemala",
		summary:
			"Aprovechar la tortilla de maíz, evitar la contaminación cruzada y saber dónde comprar y comer con seguridad.",
		href: "/vivir-sin-gluten",
	},
	{
		id: "incidencia",
		icon: "flag",
		title: "Incidencia en política pública",
		summary:
			"Documentar la ausencia de ley, registro y etiquetado, y proponer cambios usando modelos regionales como referencia.",
		href: "/incidencia",
	},
];

export const FAQS = [
	{
		q: "¿La celiaquía es lo mismo que una alergia al trigo?",
		a: "No. La celiaquía es una enfermedad autoinmune: el gluten daña el intestino delgado. Una alergia al trigo es una reacción inmunológica distinta. Ambas obligan a evitar ciertos alimentos, pero su origen, su mecanismo y su manejo son diferentes.",
	},
	{
		q: "¿La dieta sin gluten cura la celiaquía?",
		a: "No existe cura. El único tratamiento es una dieta estricta sin gluten de por vida, que permite que el intestino sane y desaparezcan los síntomas. No es una dieta de moda: para una persona celíaca es un tratamiento médico.",
	},
	{
		q: "¿Cómo sé si debo hacerme la prueba?",
		a: "Si presentas diarrea o estreñimiento crónico, anemia inexplicable, fatiga, dolor abdominal o tienes un familiar de primer grado celíaco, consulta a un médico. Muy importante: no dejes de comer gluten antes de las pruebas, porque puede producir resultados falsamente negativos.",
	},
	{
		q: "¿Qué es la contaminación cruzada?",
		a: "Ocurre cuando un alimento sin gluten entra en contacto con otro que sí lo contiene: el mismo tostador, la misma sartén o un molino que procesa trigo y maíz. Incluso una miga puede causar daño a una persona celíaca, por lo que es el principal riesgo en una dieta que, en Guatemala, ya parte de un alimento seguro como la tortilla de maíz.",
	},
	{
		q: "¿Existe una asociación de pacientes celíacos en Guatemala?",
		a: "No. A diferencia de Costa Rica, Panamá (FUCEPA), México, Paraguay, Uruguay o Argentina, Guatemala no figura en los directorios internacionales de asociaciones celíacas. Esa ausencia institucional es, en sí misma, una de las brechas más relevantes: dificulta la generación de datos, la incidencia política y la seguridad alimentaria.",
	},
];

// Consolidated sources for the references page. URLs only when verifiable.
export const REFERENCES = [
	{
		category: "Epidemiología",
		title:
			"Prevalence of Celiac Disease in Latin America: A Systematic Review and Meta-Regression",
		source: "PLoS ONE (2015) · PMID 25942408",
		note: "Estima la prevalencia de enfermedad celíaca en Latinoamérica entre 0.46 % y 0.64 %; 5.5 % en familiares de primer grado.",
		url: "https://pubmed.ncbi.nlm.nih.gov/25942408/",
	},
	{
		category: "Diagnóstico",
		title: "ESPGHAN Guidelines for Diagnosing Coeliac Disease 2020",
		source: "Journal of Pediatric Gastroenterology and Nutrition (2020)",
		note: "Ruta diagnóstica pediátrica; permite, en casos seleccionados con anticuerpos muy elevados, el diagnóstico sin biopsia.",
		url: "https://www.espghan.org/knowledge-center/publications/Gastroenterology",
	},
	{
		category: "Normativa",
		title:
			"RTCA 67.01.07:10 — Etiquetado general de alimentos previamente envasados",
		source: "Reglamento Técnico Centroamericano · Resolución 280-2012 (COMIECO-LXII)",
		note: "Obliga a declarar alérgenos —incluido el gluten— y a advertir el riesgo de contaminación cruzada con trazas.",
		url: "",
	},
	{
		category: "Normativa",
		title:
			"RTCA 67.01.31:06 — Registro sanitario de alimentos y bebidas procesados",
		source: "Reglamento Técnico Centroamericano",
		note: "Rige el procedimiento de registro sanitario; el control en Guatemala corresponde al MSPAS.",
		url: "",
	},
	{
		category: "Modelos regionales",
		title:
			"Ley de Celiaquía N.º 26.588 (Argentina, 2009; mod. 27.196/2015; Decreto 218/2023)",
		source: "Honorable Congreso de la Nación Argentina",
		note: "Modelo regional: obliga a ofrecer menú sin TACC y a cubrir alimentos sin gluten. Guatemala no tiene equivalente.",
		url: "https://www.argentina.gob.ar/normativa/nacional/ley-26588-161919",
	},
	{
		category: "Directorios",
		title: "Find Me Gluten Free — Guatemala",
		source: "findmeglutenfree.com/gt",
		note: "Directorio colaborativo de establecimientos «gluten-free friendly» y dedicados en el país.",
		url: "https://www.findmeglutenfree.com/gt",
	},
];
