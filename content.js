//SITE WIDE
const ids = {
	home: {
		projects: '688580f0',
		online: '4b5560c3',
		feed: '6d1fd0d7'
	}
};
const monthNames = [
	"januari", "februari", "maart",
	"april", "mei", "juni", "juli",
	"augustus", "september", "oktober",
	"november", "december"
];

const fontawesome = document.createElement('script');
fontawesome.setAttribute('src','https://kit.fontawesome.com/ac650fd2eb.js')
fontawesome.setAttribute('crossorigin','anonymous')
document.querySelector('head').appendChild(fontawesome)

const page = document.getElementById('page');
let header = document.getElementById('masthead')
const content = document.getElementById('content')

page.querySelector('.skip-link.screen-reader-text').remove()
content.hidden = true;

const main = document.createElement('main')
content.after(main);

header.outerHTML = `
<header class="fixed-top border-bottom border-gray">
	<nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-purple" id="navbar-top">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="https://maximumfx.nl/nfa/CvA-Icons-bw.svg" alt="Logo" class="d-inline-block align-middle">
				Filmacademie
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-top-collapse" aria-controls="navbar-top-collapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbar-top-collapse">
				<div class="navbar-nav">
					<a class="nav-link" href="https://ahknl.sharepoint.com/sites/NederlandseFilmacademie" target="_blank">Sharepoint</a>
					<a class="nav-link" href="https://2213002-2.mediaspace.kaltura.com/" target="_blank">Kaltura</a>
					<a class="nav-link" href="https://ahk-nfa.bitbybit-is.nl/nfa/" target="_blank">Rooster</a>
				</div>
				<div class="navbar-nav ml-auto">
					<a class="nav-link" href="https://filmacademie.leerpodium.nl/dlo2v0/handleiding/" title="Handleiding"><i class="far fa-info-circle"></i></a>
					<a class="nav-link" href="" title="Berichten"><i class="far fa-bell"></i></a>
					<a class="nav-link" href="https://filmacademie.leerpodium.nl/dlo2v0/?lp-redirect=new-post" title="Nieuw bericht"><i class="far fa-plus"></i></a>
					<div class="avatar avatar-nfa-white avatar-2"><img src="https://filmacademie.leerpodium.nl/dlo2v0/wp-content/uploads/sites/183/2020/08/IMG_1900_cd2e5ae2ad203964da7e611b64c396d5fab500ec7ebb2fa4-150x150.png" alt=""></div>
				</div>
			</div>
		</div>
	</nav>
	<nav class="navbar navbar-expand-lg navbar-light navbar-light bg-bg" id="navbar-bottom">
		<div class="container-fluid">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-bottom-collapse" aria-controls="navbar-bottom-collapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbar-bottom-collapse">
				<div class="navbar-nav">
					<a class="nav-link" href="/dlo2v0/"><i class="far fa-home"></i><span>Home</span></a>
					<a class="nav-link" href="/dlo2v0/my-assignments/"><i class="far fa-check"></i><span>Mijn Taken</span></a>
<!--					<a class="nav-link" href="/dlo2v0/mijn-portfolio/"><i class="far fa-briefcase"></i><span>Mijn Portfolio</span></a>-->
					<a class="nav-link" href="/dlo2v0/profiles/"><i class="far fa-users"></i><span>Profielen</span></a>
					<a class="nav-link" href="/dlo2v0/bronnen/"><i class="far fa-folders"></i><span>Bronnen</span></a>
					<a class="nav-link" href="/dlo2v0/timeline/tijdlijn-filmgeschiedenis/"><i class="far fa-stream"></i><span>Tijdlijn</span></a>
					<a class="nav-link" href="/dlo2v0/begrippenlijst/"><i class="far fa-file-alt"></i><span>Begrippenlijst</span></a>
				</div>
			</div>
		</div>
	</nav>
</header>`;

header = document.querySelector('header')
header.querySelector(`#navbar-bottom .nav-link[href="${location.pathname}"]`).classList.add('active')

//HOME
if (location.pathname === '/dlo2v0/') {
	const orgSite = content.querySelector('.elementor-section')
	//Projects
	let projects = '';
	orgSite.querySelectorAll(`[data-id="${ids.home.projects}"] .row.lp-order-list > div`).forEach(project => {
		projects += `
<div class="card card-project mb-3">
	<div class="row g-0">
		<div class="col-auto">
			<img src="${project.querySelector('img').src}" alt>
		</div>
		<div class="col">
			<div class="card-body h-100">
				<a class="stretched-link" href="${project.querySelector('a').getAttribute('href')}">${project.querySelector('.card-title').innerText}</a>
			</div>
		</div>
	</div>
</div>`;
	});

	//Online
	let online = '';
	orgSite.querySelectorAll(`[data-id="${ids.home.online}"] .elementor-text-editor > div > div:not(.modal)`).forEach(item => {
		online += `<img src="${item.querySelector('img').src}" class="avatar avatar-3" title="${orgSite.querySelector(item.getAttribute('data-target') + ' h2').textContent.trim()}">`;
	});

	//Feed
	let feed = ''
	orgSite.querySelectorAll(`[data-id="${ids.home.feed}"] .elementor-widget-container .lp-index-post`).forEach(post => {
		const header = post.querySelector('.card-header');
		let date = header.querySelector('.d-flex > .d-flex > .d-flex > div:last-child').textContent.trim().split('/');
		date[2] = 20 + date[2];
		date = new Date(parseInt(date[2]), parseInt(date[1]) - 1, parseInt(date[0]));
		date = date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
		feed += `
<div class="card card-post mb-3">
	<div class="card-header bg-white p-3">
		<div class="row align-items-center">
			<div class="col">
				<h1 class="fw-normal">Titel</h1>
				<p class="mb-0"><u>Categorie</u> <span class="badge rounded-pill bg-purple text-white">Tag</span></p>
			</div>
			<div class="col-auto fs-14 text-right">
				<p class="mb-0 fw-medium">${header.querySelector('.d-flex > .d-flex > .d-flex > div:first-child').textContent}</p>
				<p class="mb-0">${date}</p>
			</div>
			<div class="col-auto">
				<div class="avatar avatar-nfa avatar-3"><img src="${header.querySelector('img').src}" alt=""></div>
			</div>
		</div>
	</div>
	<div class="card-body pr-3 pb-3 bl-3 pt-0">
		${post.querySelector('.card-body').innerHTML}
	</div>
</div>
`
	})

	main.innerHTML = `
<div class="container-fluid">
	<div class="row">
		<div class="col-auto home-sidepanel left">
			<div class="row">
				<div class="col">
					<h1>Projecten</h1>
				</div>
				<div class="col-auto">
<!--					<p>Actief/Archief</p>-->
				</div>
			</div>
			<div id="projects">${projects}</div>
		</div>
		<div class="col home-main">
			<div class="row">
				<div class="col">
					<h1>Activiteit</h1>
				</div>
				<div class="col-auto">
<!--					<a href="#" class="btn btn-primary"><i class="far fa-filter"></i></a>-->
				</div>
			</div>
			${feed}
		</div>
		<div class="col-auto home-sidepanel right">
			<h1>Online</h1>
			<div id="online" class="mb-4">${online}</div>
			<h1>Deadlines</h1>
			<div id="deadlines" class="mb-4">
				<div class="card">
					<div class="card-body">
						<p class="mb-1 fs-14"><b>5 oktober 2020 - 23:59</b></p>
						<p class="mb-1 fs-14">Filmbetoog NFF</p>
						<p class="mb-0 fs-12">Blok 1: Film als kunstvorm in de Europese traditie</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>Vandaag</h1>
				</div>
				<div class="col">
					<a href="https://ahk-nfa.bitbybit-is.nl/nfa/" target="_blank">Bekijk rooster</a>
				</div>
			</div>
			<div id="today" class="mb-4"></div>
		</div>
	</div>
</div>
`;
}
else if (location.pathname.endsWith('profiles/')) {
	if (location.search === '') {
		let profiles = [];
		content.querySelectorAll(`.entry-content > div:first-of-type > .card`).forEach(item => {
			console.log(item);
			profiles.push({
				id: item.querySelector('a[href^="?profile="]').getAttribute('href').trim().split('=')[1],
				icon: item.querySelector('img').src,
				name: item.querySelector('.card-body p').innerHTML.trim().replace('<br>', ' '),
				studyProgramme: item.querySelector('#study-programme').textContent.trim(),
				year: item.querySelector('#year').textContent.trim(),
				class: item.querySelector('#class').textContent.trim()
			})
		})
		profiles.sort((a, b) => (a.name > b.name) ? 1 : -1)
		console.log(profiles);

		const getProfileCard = p => `
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 mb-4">
	<div class="card card-profile text-center h-100">
		<div class="card-img-top" style="background-image: url('${p.icon}');"></div>
		<div class="card-body">
			<h5 class="card-title">${p.name}</h5>
			<p class="card-text">${p.studyProgramme} ${p.year}</p>
<!--			<p class="text-muted">${p.class}</p>-->
		</div>
		<div class="card-footer">
			<a class="btn btn-light btn-border mb-1" href="/portfolio-${p.id}" target="_blank"><i class="fas fa-briefcase"></i>Portfolio</a>
			<a class="btn btn-light btn-border" href="?profile=${p.id}"><i class="fas fa-user"></i>Profiel</a>
		</div>
	</div>
</div>
`;

		main.classList.add('profiles-main')
		main.innerHTML = `
<div class="container">
	<div class="row">
		<div class="col">
			<div class="row">
				<div class="col">
					<h1>Profielen</h1>
				</div>
				<div class="col-auto">
					<a href="#" class="btn btn-primary"><i class="far fa-filter"></i></a>
				</div>
			</div>
			<nav aria-label="Page navigation example">
				<ul class="pagination justify-content-center">
					<li class="page-item disabled">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li class="page-item active"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">...</a></li>
					<li class="page-item"><a class="page-link" href="#">10</a></li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
			
			<div class="row row-cols-1 row-cols-md-3 g-4" id="profiles">${profiles.map(p => getProfileCard(p)).join('')}</div>
			
			<nav aria-label="Page navigation example">
				<ul class="pagination justify-content-center">
					<li class="page-item disabled">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li class="page-item active"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">...</a></li>
					<li class="page-item"><a class="page-link" href="#">10</a></li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>
`;
	}
	else {//Profile page

	}
}
else {
	main.classList.add('p-3');
	main.innerHTML = content.innerHTML
}