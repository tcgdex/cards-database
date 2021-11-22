import { objectLoop, objectValues } from '@dzeio/object-util'
import { SupportedLanguages } from '@tcgdex/sdk'
import express from 'express'
import Card from './V2/Components/Card'
import Serie from './V2/Components/Serie'
import Set from './V2/Components/Set'

const counts: Record<SupportedLanguages, number> = {
	en: Card.raw('en').length,
	fr: Card.raw('fr').length,
	de: Card.raw('de').length,
	it: Card.raw('it').length,
	pt: Card.raw('pt').length,
	es: Card.raw('es').length,
}

const maxLang: Record<SupportedLanguages, number> = {
	en: Set.find('en').reduce((p, set) => p + (Set.findOne('en', {id: set.id})?.cardCount?.total ?? 0), 0),
	fr: Set.find('fr').reduce((p, set) => p + (Set.findOne('en', {id: set.id})?.cardCount?.total ?? 0), 0),
	de: Set.find('de').reduce((p, set) => p + (Set.findOne('en', {id: set.id})?.cardCount?.total ?? 0), 0),
	it: Set.find('it').reduce((p, set) => p + (Set.findOne('en', {id: set.id})?.cardCount?.total ?? 0), 0),
	pt: Set.find('pt').reduce((p, set) => p + (Set.findOne('en', {id: set.id})?.cardCount?.total ?? 0), 0),
	es: Set.find('es').reduce((p, set) => p + (Set.findOne('en', {id: set.id})?.cardCount?.total ?? 0), 0),
}

const setsTable = Serie.find('en').map((serie) => {
	return `<h2>${serie.name}</h2>

	<table class="serie">
		<thead>
			<tr>
				<th rowspan="2">Set Name</th>
				<th colspan="2">English</th>
				<th colspan="2">French</th>
				<th colspan="2">German</th>
				<th colspan="2">Italian</th>
				<th colspan="2">Portuguese</th>
				<th colspan="2">Spanish</th>
			</tr>

			<tr>
				<th>Cards</th>
				<th>Images</th>

				<th>Cards</th>
				<th>Images</th>

				<th>Cards</th>
				<th>Images</th>

				<th>Cards</th>
				<th>Images</th>

				<th>Cards</th>
				<th>Images</th>

				<th>Cards</th>
				<th>Images</th>
			</tr>
		</thead>
		<tbody>
			${serie.sets().map((set) => {
				let str = '<tr>'
				objectLoop(counts, (_, key) => {
					const lang = Set.find(key as 'en', {id: set.id})?.[0]?.cards()

					if (!lang) {
						str += `
						<td class="na"></td>
						<td class="na"></td>`
						return
					}
					const count = lang.length
					const imgCount = lang.reduce((p, c) => p + (c.image ? 1 : 0), 0)

					const percent = 100 * count / set.cardCount.total
					const imgPercent = 100 * imgCount / set.cardCount.total
					let status = percent === 100 ? imgPercent === 100 ? '' : 'missing-img' : 'missing-cards'
					if (percent === 0) {
						status = 'empty'
					}
					str +=`
					${key === 'en' ? `<td>${set.name}</td>` : ''}
					<td class="${status}">${percent.toFixed(2)}% (${count})</td>
					<td class="${status}">${imgPercent.toFixed(2)}% (${imgCount})</td>`
				})
				str += '</tr>'
				// console.log(set)
				return str
			}).join('')}
		</tbody>
	</table>`
}).join('')

const html = `
<style>
td, th {
	border: black 1px solid;
}
th {
	font-size: 1.2em;
}
table {
	border-collapse: separate;
	border-spacing: 1em 0;
	min-width: 100%;
}
.serie td:not(:first-child), .completed {
	background: gold;
}
.serie td.na, .na {
	background: black;
}
.serie td.missing-cards, .missing-cards {
	background: #3f17ff4f;
}
.serie td.missing-img, .missing-img {
	background: #67e301;
}
.serie td.empty, .empty {
	background: #ff000070;
}
</style>
<h1>TCGdex Progress</h1>
<table>
<thead>
	<tr>
		<th></th>
		<th>English</th>
		<th>French</th>
		<th>German</th>
		<th>Italian</th>
		<th>Portuguese</th>
		<th>Spanish</th>
		<th>Total</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Cards</td>
		<td>${counts.en} of ${maxLang.en}</td>
		<td>${counts.fr} of ${maxLang.fr}</td>
		<td>${counts.de} of ${maxLang.de}</td>
		<td>${counts.it} of ${maxLang.it}</td>
		<td>${counts.pt} of ${maxLang.pt}</td>
		<td>${counts.es} of ${maxLang.es}</td>
		<td>${objectValues(counts).reduce((p, c) => p + c, 0)} of ${objectValues(maxLang).reduce((p, c) => p + c, 0)}</td>
	</tr><tr>
	<td>Percentage</td>
		<td>${(100 * counts.en / maxLang.en).toFixed(2)}%</td>
		<td>${(100 * counts.fr / maxLang.fr).toFixed(2)}%</td>
		<td>${(100 * counts.de / maxLang.de).toFixed(2)}%</td>
		<td>${(100 * counts.it / maxLang.it).toFixed(2)}%</td>
		<td>${(100 * counts.pt / maxLang.pt).toFixed(2)}%</td>
		<td>${(100 * counts.es / maxLang.es).toFixed(2)}%</td>
		<td>${(100 * objectValues(counts).reduce((p, c) => p + c, 0) / objectValues(maxLang).reduce((p, c) => p + c, 0)).toFixed(2)}%</td>
	</tr><tr>
	<td>Remaining</td>
		<td>${maxLang.en - counts.en}</td>
		<td>${maxLang.fr - counts.fr}</td>
		<td>${maxLang.de - counts.de}</td>
		<td>${maxLang.it - counts.it}</td>
		<td>${maxLang.pt - counts.pt}</td>
		<td>${maxLang.es - counts.es}</td>
		<td>${objectValues(maxLang).reduce((p, c) => p + c, 0) - objectValues(counts).reduce((p, c) => p + c, 0)}</td>
	</tr>
</tbody>
</table>

<h2>Status</h2>
<ul>
	<li class="completed">Completed</li>
	<li class="missing-cards">Missing some cards informations</li>
	<li class="missing-img">Missing some cards images</li>
	<li class="empty">No Data</li>
	<li class="na" style="color: white">Not Available</li>
</ul>


${setsTable}
`

export default express.Router().get('/', (req, res): void => {
		res.send(html)
	})
