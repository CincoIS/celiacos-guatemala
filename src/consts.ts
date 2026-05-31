// Global site data for Celiacos Guatemala.
// Import this data from anywhere using the `import` keyword.

export const SITE_TITLE = "Celiacos Guatemala";
export const SITE_DESCRIPTION =
	"Asociación sin fines de lucro que acompaña a las personas celíacas de Guatemala con información, comunidad y diagnóstico digno. Vida sin gluten, con dignidad.";

export const ORG = {
	name: "Celiacos Guatemala",
	legalName: "Asociación Celiacos de Guatemala",
	tagline: "Vida sin gluten, con dignidad",
	founded: 2014,
	email: "info@celiacosguatemala.org",
	phone: "+502 2245 6789",
	whatsapp: "+502 5012 3456",
	address: "12 Calle 1-25, Zona 10, Ciudad de Guatemala",
	hours: "Lunes a viernes, 9:00 – 17:00",
};

export const NAV_LINKS = [
	{ href: "/", label: "Inicio" },
	{ href: "/quienes-somos", label: "Quiénes Somos" },
	{ href: "/que-es-la-celiaquia", label: "La Celiaquía" },
	{ href: "/programas", label: "Programas" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contacto", label: "Contacto" },
];

export const SOCIAL_LINKS = {
	facebook: "https://facebook.com/celiacosguatemala",
	instagram: "https://instagram.com/celiacosguatemala",
	youtube: "https://youtube.com/@celiacosguatemala",
};

export const STATS = [
	{ value: "1 de 100", label: "personas vive con celiaquía en Guatemala" },
	{ value: "+3,200", label: "familias acompañadas desde 2014" },
	{ value: "85", label: "comercios aliados sin gluten certificados" },
	{ value: "24", label: "talleres y capacitaciones cada año" },
];

export const VALUES = [
	{
		icon: "heart",
		title: "Dignidad",
		text: "Toda persona celíaca merece un diagnóstico temprano y alimentos seguros, sin importar dónde viva o cuánto gane.",
	},
	{
		icon: "users",
		title: "Comunidad",
		text: "Nadie debería enfrentar la celiaquía en soledad. Construimos una red de apoyo entre familias, pacientes y profesionales.",
	},
	{
		icon: "book",
		title: "Información confiable",
		text: "Traducimos la ciencia médica a un lenguaje claro y verificado, libre de mitos y de falsas curas.",
	},
	{
		icon: "leaf",
		title: "Inclusión",
		text: "Trabajamos para que escuelas, restaurantes y hospitales ofrezcan opciones seguras sin gluten para todas y todos.",
	},
];

export const PROGRAMS = [
	{
		id: "diagnostico",
		icon: "stethoscope",
		title: "Diagnóstico Digno",
		summary:
			"Jornadas de tamizaje y orientación médica para acortar el promedio de 7 años que tarda un diagnóstico en Guatemala.",
		details: [
			"Jornadas de pruebas de anticuerpos a precio subsidiado.",
			"Acompañamiento para interpretar resultados con gastroenterólogos aliados.",
			"Rutas de referencia hacia hospitales públicos y privados.",
		],
	},
	{
		id: "comunidad",
		icon: "users",
		title: "Red de Apoyo",
		summary:
			"Grupos de apoyo presenciales y en línea donde las familias comparten experiencias, recetas y soluciones cotidianas.",
		details: [
			"Encuentros mensuales en la capital y por videollamada.",
			"Grupo de WhatsApp moderado por voluntarios capacitados.",
			"Acompañamiento especial para padres de niñas y niños recién diagnosticados.",
		],
	},
	{
		id: "educacion",
		icon: "book",
		title: "Educación y Talleres",
		summary:
			"Capacitamos a familias, cocineros y personal de salud sobre la dieta sin gluten y la contaminación cruzada.",
		details: [
			"Talleres de cocina segura sin gluten.",
			"Capacitación a restaurantes y comedores escolares.",
			"Charlas para personal médico y de enfermería.",
		],
	},
	{
		id: "sello",
		icon: "badge",
		title: "Sello Sin Gluten",
		summary:
			"Programa de verificación que identifica comercios y productos seguros para la comunidad celíaca.",
		details: [
			"Auditoría de cocinas y procesos de producción.",
			"Directorio público de comercios aliados certificados.",
			"Reevaluación anual para mantener el sello.",
		],
	},
	{
		id: "incidencia",
		icon: "flag",
		title: "Incidencia y Políticas",
		summary:
			"Impulsamos el etiquetado claro de alimentos y el acceso a productos sin gluten asequibles.",
		details: [
			"Propuestas de ley para etiquetado de alérgenos.",
			"Mesas de diálogo con el Ministerio de Salud.",
			"Campañas de concientización en medios y redes.",
		],
	},
	{
		id: "becas",
		icon: "gift",
		title: "Despensa Solidaria",
		summary:
			"Entregamos productos sin gluten a familias de bajos recursos, para quienes la dieta puede costar el triple.",
		details: [
			"Despensas mensuales de harinas y pastas sin gluten.",
			"Alianzas con productores locales de maíz, arroz y yuca.",
			"Priorización de hogares con niñas y niños celíacos.",
		],
	},
];

export const TEAM = [
	{
		name: "Dra. Ana Lucía Morales",
		role: "Directora Ejecutiva",
		bio: "Gastroenteróloga pediatra. Fundó la asociación tras el diagnóstico de su hija en 2014.",
	},
	{
		name: "Carlos Méndez Pérez",
		role: "Coordinador de Programas",
		bio: "Nutricionista especializado en enfermedad celíaca y educación alimentaria comunitaria.",
	},
	{
		name: "María José Cabrera",
		role: "Coordinadora de Voluntariado",
		bio: "Trabajadora social. Lidera la red de grupos de apoyo en todo el país.",
	},
	{
		name: "Jorge Estuardo Ríos",
		role: "Comunicación e Incidencia",
		bio: "Comunicador social enfocado en políticas públicas de salud y etiquetado.",
	},
];

export const FAQS = [
	{
		q: "¿La celiaquía es lo mismo que una alergia al trigo?",
		a: "No. La celiaquía es una enfermedad autoinmune: el gluten daña el intestino delgado. Una alergia al trigo es una reacción distinta del sistema inmune. Ambas requieren evitar ciertos alimentos, pero su origen y manejo son diferentes.",
	},
	{
		q: "¿La dieta sin gluten cura la celiaquía?",
		a: "No existe cura. El único tratamiento es una dieta estricta sin gluten de por vida, que permite que el intestino sane y desaparezcan los síntomas. No es una dieta de moda: para una persona celíaca es un tratamiento médico.",
	},
	{
		q: "¿Cómo sé si debo hacerme la prueba?",
		a: "Si presentas diarrea o estreñimiento crónico, anemia inexplicable, fatiga, dolor abdominal o si un familiar cercano es celíaco, consulta a tu médico. Importante: no dejes de comer gluten antes de hacerte las pruebas, ya que puede alterar los resultados.",
	},
	{
		q: "¿Qué es la contaminación cruzada?",
		a: "Ocurre cuando un alimento sin gluten entra en contacto con otro que sí lo contiene (por ejemplo, usar el mismo tostador o la misma sartén). Incluso una miga puede causar daño a una persona celíaca.",
	},
	{
		q: "¿Necesito ser celíaco para ser voluntario?",
		a: "Para nada. Recibimos a cualquier persona que quiera aportar su tiempo y talento: profesionales de salud, cocineros, comunicadores, contadores y más. La empatía es el único requisito.",
	},
];
