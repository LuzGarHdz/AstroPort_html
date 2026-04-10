// Shared content data and article page logic for AstroPort.
(function () {
	const newsArticles = [
		{
			id: 1,
			title: 'Llegando a la Luna',
			summary: 'Primera misión logística a la órbita lunar para habilitar rutas estables hacia AstroSS.',
			image: 'images/LUNA.jpg',
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
			image: 'images/ESTACION.jpg',
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
			image: 'images/blockchain-vault.jpg',
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
			image: 'images/COMEDOR.webp',
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
			image: 'images/MAQUINARIA.webp',
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
			image: 'images/VIVERO.jpg',
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
