// Shared content data and article page logic for AstroPort.
(function () {
	const newsArticles = [
		{
			id: 8,
			title: 'AstroPort 2.0: la Estacion se Renueva',
			summary: 'AstroSS estrena lunas, tienda, carrito de carga y un sistema de integridad y energia.',
			image: 'images/estacion2.png',
			author: 'Comando AstroSS',
			date: '17 Noviembre 3125',
			tags: ['Actualizacion', '2.0', 'Estacion'],
			content: [
				'La estacion completo su mayor actualizacion desde su apertura. Cada jornada bien calificada ahora se paga en lunas, la nueva moneda de AstroSS, que el personal puede gastar en la tienda de suministros.',
				'El nuevo carrito de carga permite mover varias cajas por viaje y se puede mejorar para transportar hasta ocho. Ademas, la estacion cuenta ahora con indicadores de integridad estructural y energia que el personal debe vigilar.',
				'Si la integridad llega a cero, la estacion queda fuera de servicio. Si la energia cae, las luces parpadean y el almacen deja de producir suministros hasta que se repare.'
			]
		},
		{
			id: 9,
			title: 'Alerta: Piratas Espaciales',
			summary: 'Se reporta la llegada de un pirata que sabotea los paneles de energia de la estacion.',
			image: 'images/pirata.png',
			author: 'Seguridad AstroSS',
			date: '20 Noviembre 3125',
			tags: ['Seguridad', 'Piratas', 'Alerta'],
			content: [
				'Un pirata espacial fue visto cerca de los hangares. Su objetivo son los paneles de energia: los sabotea uno por uno y escapa en cuanto se siente descubierto.',
				'El personal tiene dos formas de detenerlo: atraparlo antes de que huya o destruir su nave. Ambas acciones seran recompensadas con lunas adicionales.',
				'Se recomienda instalar la nueva caseta de vigilancia, que emite una alerta en cuanto el pirata llega a la estacion.'
			]
		},
		{
			id: 10,
			title: 'Nueva Tienda de Suministros',
			summary: 'Botiquines, bombas, semillas y mejoras ya estan disponibles a cambio de lunas.',
			image: 'images/almacen.png',
			author: 'Centro de Operaciones',
			date: '22 Noviembre 3125',
			tags: ['Tienda', 'Lunas', 'Mejoras'],
			content: [
				'La tienda de AstroSS abre sus puertas al personal. Desde el diario de la estacion se pueden comprar botiquines, bombas, semillas, la caseta de vigilancia y mejoras para el carrito y el martillo de reparacion.',
				'Las bombas se lanzan en arco y danan a todos los enemigos cercanos, una herramienta clave contra las hordas alienigenas.',
				'El inventario muestra en todo momento cuantos consumibles quedan y permite usarlos sin perder tiempo de servicio.'
			]
		},
		{
			id: 11,
			title: 'Protocolo de Defensa y Reparacion',
			summary: 'Hordas alienigenas atacan las paredes; el personal recibe martillos de reparacion.',
			image: 'images/maquinaria1.png',
			author: 'Departamento de Ingenieria',
			date: '25 Noviembre 3125',
			tags: ['Defensa', 'Reparacion', 'Aliens'],
			content: [
				'Cada vez que aterriza una nave alienigena, una horda de aliens se dirige a las paredes de la estacion para derribarlas. Junto a ellos llega un alien jefe que persigue al personal.',
				'Las paredes y los paneles danados se rompen en pedazos y deben repararse con el martillo. Con la mejora de martillo, cada reparacion toma menos tiempo.',
				'Ingenieria recuerda que la integridad de la estacion no se recupera sola entre jornadas: cada reparacion cuenta.'
			]
		},
		{
			id: 12,
			title: 'El Vivero Abre sus Macetas',
			summary: 'El personal ya puede plantar semillas y cosechar verduras que restauran la salud.',
			image: 'images/vivero2.png',
			author: 'BioSoporte AstroSS',
			date: '28 Noviembre 3125',
			tags: ['Vivero', 'Salud', 'Cultivo'],
			content: [
				'Las macetas del vivero quedaron habilitadas para el personal. Basta con plantar una semilla y esperar a que la planta crezca.',
				'Cada cosecha produce una verdura que puede consumirse desde el inventario para recuperar vida durante las jornadas mas dificiles.',
				'Las semillas pueden conseguirse en la tienda de suministros a cambio de lunas.'
			]
		},
		{
			id: 13,
			title: 'Llega el Alien Jefe',
			summary: 'Un alien de gran tamano desciende de su nave y persigue al personal por toda la estacion.',
			image: 'images/alien.png',
			author: 'Seguridad AstroSS',
			date: '30 Noviembre 3125',
			tags: ['Aliens', 'Jefe', 'Alerta'],
			content: [
				'La nave alienigena que aterrizo en el sector exterior trajo consigo a un alien jefe. A diferencia de la horda, este enemigo busca directamente al personal y lo sigue a donde vaya.',
				'Sus ataques cuerpo a cuerpo son lentos pero poderosos. Seguridad recomienda mantener la distancia y usar la pistola o las bombas para debilitarlo.',
				'Al ser derrotado, su nave abandona la estacion y las alarmas vuelven a la normalidad.'
			]
		},
		{
			id: 14,
			title: 'Naves de Tres Naciones',
			summary: 'China, Rusia y Estados Unidos envian naves con pedidos diferentes cada jornada.',
			image: 'images/NAVE.jpg',
			author: 'Relaciones Interplanetarias',
			date: '02 Diciembre 3125',
			tags: ['Naves', 'Naciones', 'Pedidos'],
			content: [
				'AstroSS recibe a diario tripulaciones de tres naciones. Cada nave aterriza en uno de los dos hangares y solicita una combinacion distinta de alimentos, herramientas y combustible.',
				'El personal debe aceptar el pedido, preparar los suministros en el almacen y entregarlos en el hangar correcto antes de que se agote el tiempo.',
				'Las entregas tardias o incorrectas afectan la calificacion de la jornada y la reputacion de la estacion.'
			]
		},
		{
			id: 15,
			title: 'Calificacion por Estrellas',
			summary: 'Cada jornada se evalua con estrellas segun la rapidez y precision de las entregas.',
			image: 'images/results.png',
			author: 'Centro de Operaciones',
			date: '04 Diciembre 3125',
			tags: ['Calidad', 'Estrellas', 'Servicio'],
			content: [
				'Al cerrar cada jornada, el sistema de la estacion promedia la calificacion de todos los pedidos atendidos, de cero a cinco estrellas.',
				'Un promedio de 2.5 estrellas o menos pone en riesgo la operacion de la estacion. Un buen promedio, en cambio, se traduce en lunas para el personal.',
				'Los resultados se muestran al final del dia junto con los bonos obtenidos, como la captura del pirata.'
			]
		},
		{
			id: 16,
			title: 'Carrito de Carga Mejorado',
			summary: 'Ingenieria presenta tres versiones del carrito con capacidad para 2, 4 y 8 cajas.',
			image: 'images/carrito.png',
			author: 'Departamento de Ingenieria',
			date: '06 Diciembre 3125',
			tags: ['Carrito', 'Mejoras', 'Logistica'],
			content: [
				'El nuevo carrito de carga reduce los viajes entre el almacen y los hangares. El personal puede tomarlo, cargar las cajas una por una y llevarlas todas juntas.',
				'La primera mejora duplica su capacidad a cuatro cajas, y la segunda la lleva hasta ocho. Ambas se compran en la tienda de suministros.',
				'Ingenieria recuerda que mientras se empuja el carrito no es posible usar el arma ni reparar.'
			]
		},
		{
			id: 17,
			title: 'Caseta de Vigilancia Instalada',
			summary: 'Una nueva caseta detecta la llegada de piratas y alerta al personal de inmediato.',
			image: 'images/caseta.png',
			author: 'Seguridad AstroSS',
			date: '08 Diciembre 3125',
			tags: ['Seguridad', 'Vigilancia', 'Piratas'],
			content: [
				'Tras los primeros reportes de sabotaje, Seguridad instalo una caseta de vigilancia en la estacion.',
				'Cuando un pirata se aproxima, la caseta emite una alerta parpadeante en la pantalla del personal para que pueda reaccionar a tiempo.',
				'La caseta esta disponible como compra unica en la tienda de suministros.'
			]
		},
		{
			id: 18,
			title: 'Estructuras que se Rompen',
			summary: 'Los ataques ahora dejan paredes, paneles y naves hechos pedazos.',
			image: 'images/paredes.png',
			author: 'Departamento de Ingenieria',
			date: '10 Diciembre 3125',
			tags: ['Destruccion', 'Fisica', 'Reparacion'],
			content: [
				'Los sensores de la estacion confirmaron que los impactos alienigenas y los sabotajes rompen las estructuras en fragmentos reales.',
				'Los escombros se despejan solos despues de unos segundos, pero la pared o el panel queda inutilizado hasta que el personal lo repare.',
				'La nave pirata tambien puede ser destruida si recibe suficiente dano.'
			]
		},
		{
			id: 19,
			title: 'Bombas de Contencion',
			summary: 'El arsenal de la estacion suma bombas que se lanzan en arco y danan en area.',
			image: 'images/bombas.png',
			author: 'Seguridad AstroSS',
			date: '12 Diciembre 3125',
			tags: ['Armas', 'Bombas', 'Defensa'],
			content: [
				'Ademas de la pistola reglamentaria, el personal ya puede lanzar bombas de contencion contra grupos de enemigos.',
				'Las bombas siguen una trayectoria en arco y explotan al tocar el suelo o tras unos segundos, danando a todos los aliens dentro de su radio.',
				'Se recomienda no lanzarlas cerca de las paredes de la estacion durante una horda.'
			]
		},
		{
			id: 20,
			title: 'Jornadas Guardadas',
			summary: 'La estacion registra el progreso del personal al inicio de cada jornada.',
			image: 'images/saves.png',
			author: 'Centro de Operaciones',
			date: '15 Diciembre 3125',
			tags: ['Guardado', 'Progreso', 'Sistema'],
			content: [
				'El nuevo sistema de registro guarda automaticamente las lunas, los consumibles, las mejoras y el estado de la estacion al comenzar cada dia.',
				'Al volver, el personal puede elegir Continuar en el menu principal y retomar desde el inicio de la jornada guardada.',
				'Al completar las tres jornadas con exito, el registro se reinicia para una nueva partida.'
			]
		},
		{
			id: 1,
			title: 'Llegando a la Luna',
			summary: 'Primera misión logística a la órbita lunar para habilitar rutas estables hacia AstroSS.',
			image: 'images/luna.png',
			author: 'Comando AstroSS',
			date: '12 Agosto 3117',
			tags: ['Mision', 'Logistica', 'Luna'],
			content: [
				'La flota inaugural completó su llegada a la órbita lunar con suministros críticos para la expansión de AstroSS. Este avance marca el inicio de una red de transporte más confiable para tripulaciones de distintas naciones.',
				'Durante la operación se validaron protocolos de descarga, abastecimiento y mantenimiento de naves en condiciones de baja gravedad. Los tiempos de respuesta mejoraron frente a simulaciones previas.',
				'En las próximas semanas se abrirán ventanas adicionales para reforzar módulos de soporte y ampliar la capacidad de recepción de viajeros en tránsito.'
			]
		},
		{
			id: 2,
			title: 'Inicio de la Construccion de AstroSS',
			summary: 'Comienza el ensamblaje estructural de la estacion espacial con equipos multinacionales.',
			image: 'images/inicio.png',
			author: 'Departamento de Ingenieria',
			date: '03 Febrero 3118',
			tags: ['Infraestructura', 'Ingenieria', 'Orbita'],
			content: [
				'Las labores de construccion iniciaron con la union del modulo central y los primeros anillos de soporte. El objetivo principal fue establecer una base segura para futuros acoplamientos.',
				'Los equipos tecnicos reportaron un rendimiento por encima del esperado en las primeras fases, especialmente en calibracion de sistemas y sellado de compartimentos.',
				'Esta etapa habilita la instalacion de zonas de suministros, viveros y espacios de descanso para tripulaciones en ruta.'
			]
		},
		{
			id: 3,
			title: 'Mapa de la Estacion',
			summary: 'Se publica el primer plano funcional con rutas, modulos y puntos de servicio.',
			image: 'images/mapa.png',
			author: 'Navegacion Interna',
			date: '20 Febrero 3118',
			tags: ['Mapa', 'Operacion', 'Servicios'],
			content: [
				'AstroSS presento su primer mapa oficial para orientar a visitantes y personal operativo. El plano incluye rutas de emergencia, areas de carga y zonas de atencion a tripulaciones.',
				'La nueva distribucion mejora la circulacion dentro de la estacion y reduce tiempos de desplazamiento entre los modulos clave.',
				'El equipo de navegacion continuara actualizando esta version conforme se agreguen nuevas amenidades y espacios de trabajo.'
			]
		},
		{
			id: 4,
			title: 'Abiertos al Publico',
			summary: 'AstroSS inicia operaciones abiertas para visitantes, viajeros y tripulaciones comerciales.',
			image: 'images/abiertos.png',
			author: 'Relaciones Interplanetarias',
			date: '08 Marzo 3122',
			tags: ['Publico', 'Turismo', 'Operacion'],
			content: [
				'Con la apertura oficial, AstroSS recibio a sus primeras delegaciones civiles. La estacion ofrece servicios de abastecimiento, descanso y mantenimiento para naves en transito.',
				'Los visitantes pueden recorrer zonas designadas para conocer procesos internos de logistica y coordinacion interplanetaria.',
				'Esta nueva fase fortalece la vision de AstroSS como un punto de encuentro seguro y eficiente en el cosmos.'
			]
		},
		{
			id: 5,
			title: 'Servicios de AstroSS',
			summary: 'Se amplian las amenidades de combustible, suministros y soporte para tripulaciones.',
			image: 'images/servicios.png',
			author: 'Centro de Operaciones',
			date: '16 Marzo 3122',
			tags: ['Suministros', 'Combustible', 'Soporte'],
			content: [
				'El nuevo paquete de servicios integra estaciones de reabastecimiento rapido y una red de seguimiento de pedidos por nave.',
				'Cada tripulacion ahora cuenta con atencion personalizada basada en historial de visitas, necesidades de carga y prioridades de ruta.',
				'La expansion busca reducir tiempos de escala y elevar la calidad de servicio durante todo el trayecto espacial.'
			]
		},
		{
			id: 6,
			title: 'Ataque de Aliens',
			summary: 'Un incidente de seguridad activa los protocolos de defensa de la estacion.',
			image: 'images/ALIENS.webp',
			author: 'Seguridad AstroSS',
			date: '29 Septiembre 3123',
			tags: ['Seguridad', 'Defensa', 'Alerta'],
			content: [
				'Durante la jornada del 29 de marzo, una presencia hostil no identificada intento vulnerar las zonas externas de la estacion. El personal activo los protocolos de contencion de inmediato.',
				'La evacuacion de sectores criticos y el despliegue de unidades defensivas permitieron controlar la situacion sin comprometer los modulos principales.',
				'Tras el incidente, se reforzaron barreras perimetrales y se iniciaron auditorias de seguridad para prevenir futuros ataques.'
			]
		},
		{
			id: 7,
			title: 'Vivero de la Estacion',
			summary: 'El vivero entra en fase productiva para sostener alimentos frescos en orbitas largas.',
			image: 'images/vivero.png',
			author: 'BioSoporte AstroSS',
			date: '05 Abril 3124',
			tags: ['Vivero', 'Alimentos', 'Sostenibilidad'],
			content: [
				'El modulo de cultivo de AstroSS completo su fase inicial y comenzo a producir vegetales de ciclo corto en ambiente controlado.',
				'El sistema hidroponico optimiza consumo de agua y nutrientes para mantener una produccion estable durante trayectos prolongados.',
				'Este avance fortalece la autonomia de la estacion y asegura mejores condiciones para tripulaciones en rutas de larga distancia.'
			]
		}
	];

	function getArticleById(rawId) {
		const articleId = Number(rawId);
		return newsArticles.find((article) => article.id === articleId) || null;
	}

	function toPortfolioData() {
		return newsArticles.map((article) => ({
			id: article.id,
			title: article.title,
			description: article.summary,
			image: article.image,
			tech: article.tags
		}));
	}

	function goToArticle(articleId) {
		window.location.href = `article.html?article=${encodeURIComponent(articleId)}`;
	}

	function renderArticlePage() {
		const articleRoot = document.getElementById('articleRoot');
		if (!articleRoot) {
			return;
		}

		const params = new URLSearchParams(window.location.search);
		const selectedId = params.get('article') || params.get('id') || '1';
		const selectedArticle = getArticleById(selectedId) || newsArticles[0];

		document.title = `${selectedArticle.title} | AstroSS Noticias`;

		const tagMarkup = selectedArticle.tags
			.map((tag) => `<span class="article-tag">${tag}</span>`)
			.join('');

		const contentMarkup = selectedArticle.content
			.map((paragraph) => `<p class="article-paragraph">${paragraph}</p>`)
			.join('');

		articleRoot.innerHTML = `
			<article class="article-card">
				<a class="article-back" id="articleBackLink" href="index.html?skipLoader=1#home">Volver a inicio</a>
				<div class="article-media">
					<img src="${selectedArticle.image}" alt="${selectedArticle.title}">
				</div>
				<header class="article-header">
					<h1 class="article-title">${selectedArticle.title}</h1>
					<p class="article-meta">${selectedArticle.date} | ${selectedArticle.author}</p>
					<p class="article-summary">${selectedArticle.summary}</p>
					<div class="article-tags">${tagMarkup}</div>
				</header>
				<section class="article-body">${contentMarkup}</section>
			</article>
		`;

		const articleBackLink = document.getElementById('articleBackLink');
		if (articleBackLink) {
			articleBackLink.addEventListener('click', () => {
				// Persist for one navigation so index can bypass loader.
				sessionStorage.setItem('skipLoader', '1');
			});
		}
	}

	window.AstroContent = {
		newsArticles,
		getArticleById,
		toPortfolioData,
		goToArticle
	};

	document.addEventListener('DOMContentLoaded', renderArticlePage);
})();
