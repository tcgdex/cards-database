import { objectKeys, objectLoop, objectMap } from '@dzeio/object-util'
import express from 'express'
import Serie from './V2/Components/Serie'
import Set from './V2/Components/Set'

import deStats from '../generated/de/stats.json'
import enStats from '../generated/en/stats.json'
import esStats from '../generated/es/stats.json'
import frStats from '../generated/fr/stats.json'
import itStats from '../generated/it/stats.json'
import ptStats from '../generated/pt/stats.json'

import de from '../generated/de/stats.json'
import en from '../generated/en/stats.json'
import es from '../generated/es/stats.json'
import fr from '../generated/fr/stats.json'
import id from '../generated/id/stats.json'
import it from '../generated/it/stats.json'
import ja from '../generated/ja/stats.json'
import ko from '../generated/ko/stats.json'
import nl from '../generated/nl/stats.json'
import pl from '../generated/pl/stats.json'
import ptbr from '../generated/pt-br/stats.json'
import ptpt from '../generated/pt-pt/stats.json'
import pt from '../generated/pt/stats.json'
import ru from '../generated/ru/stats.json'
import th from '../generated/th/stats.json'
import zhcn from '../generated/zh-cn/stats.json'
import zhtw from '../generated/zh-tw/stats.json'

const langs = {
	'en': en,
	'fr': fr,
	'es': es,
	'it': it,
	'pt': pt,
	'pt-br': ptbr,
	'pt-pt': ptpt,
	'de': de,
	'nl': nl,
	'pl': pl,
	'ru': ru,
	'ja': ja,
	'ko': ko,
	'zh-tw': zhtw,
	'id': id,
	'th': th,
	'zh-cn': zhcn,
} as const

const langsToName = {
	'en': 'English',
	'fr': 'French',
	'es': 'Spanish',
	'it': 'Italian',
	'pt': 'Portuguese (brazil)',
	'pt-br': 'Portuguese (brazil)',
	'pt-pt': 'Portugueuse',
	'de': 'German',
	'nl': 'Dutch',
	'pl': 'Polish',
	'ru': 'Russian',
	'ja': 'Japanese',
	'ko': 'Korean',
	'zh-tw': 'Chinese (traditionnal)',
	'id': 'Indonesian',
	'th': 'Thai',
	'zh-cn': 'Chinese (simplified)',
} as const

/**
 * This file is meant to contains the TCGdex Project status page.
 */

/**
 * Simple calculation of maximum and current count globally
 */
const totalStats = {
	count: objectMap(langs, (it) => it.count).reduce((p, c) => p + c, 0),
	total: objectMap(langs, (it) => it.total).reduce((p, c) => p + c, 0),
	images: objectMap(langs, (it) => it.images).reduce((p, c) => p + c, 0),
}

/**
 * Array containing data for sets, it also allow to display non english available sets
 * Serie
 * Set
 * Array of langs
 */
const setsData: Record<string, Record<string, Array<string>>> = {}

function preProcessSets(t: any, lang: keyof typeof langsToName) {
	objectLoop(t.sets, (sets, serieId: string) => {
		if (!(serieId in setsData)) {
			setsData[serieId] = {}
		}
		objectLoop(sets, (_, set: string) => {
			if (!(set in setsData[serieId])) {
				setsData[serieId][set] = []
			}
			setsData[serieId][set].push(lang)
		})
	})
}

objectLoop(langs, (stats, key) => preProcessSets(stats, key))

// Yes this is ugly
export default express.Router()
.get('/github.svg', (_, res): void => {
	res.setHeader('Content-Type', 'image/svg+xml')
	res.send(`<svg width="1052" height="239" viewBox="0 0 1052 239" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect width="1052" height="239" rx="16" fill="white"/>
	<rect width="1052" height="50" rx="16" fill="#F4F4F4"/>
	<text fill="#999999" font-weight="bold" ><tspan x="145.5" y="30.944">English</tspan></text>
	<text fill="#999999" font-weight="bold" ><tspan x="275" y="30.944">French</tspan></text>
	<text fill="#999999" font-weight="bold" ><tspan x="404.5" y="30.944">German</tspan></text>
	<text fill="#999999" font-weight="bold" ><tspan x="534" y="30.944">Italian</tspan></text>
	<text fill="#999999" font-weight="bold" ><tspan x="663.5" y="30.944">Portuguese</tspan></text>
	<text fill="#999999" font-weight="bold" ><tspan x="793" y="30.944">Spanish</tspan></text>
	<text fill="#999999" font-weight="bold" ><tspan x="922.5" y="30.944">Total</tspan></text>
	<text fill="black"><tspan x="16" y="91.444">Card Progress</tspan></text>
	<text fill="black"><tspan x="145.5" y="80.944">${enStats.count} of ${enStats.total}&#10;</tspan><tspan x="145.5" y="101.944">${(100 * enStats.count / enStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="275" y="80.944">${frStats.count} of ${frStats.total}&#10;</tspan><tspan x="275" y="101.944">${(100 * frStats.count / frStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="404.5" y="80.944">${deStats.count} of ${deStats.total}&#10;</tspan><tspan x="404.5" y="101.944">${(100 * deStats.count / deStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="534" y="80.944">${itStats.count} of ${itStats.total}&#10;</tspan><tspan x="534" y="101.944">${(100 * itStats.count / itStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="663.5" y="80.944">${ptStats.count} of ${ptStats.total}&#10;</tspan><tspan x="663.5" y="101.944">${(100 * ptStats.count / ptStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="793" y="80.944">${esStats.count} of ${esStats.total}&#10;</tspan><tspan x="793" y="101.944">${(100 * esStats.count / esStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="922.5" y="80.944">${totalStats.count} of ${totalStats.total}&#10;</tspan><tspan x="922.5" y="101.944">${(100 * totalStats.count / totalStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="16" y="151.944">Images </tspan><tspan x="16" y="169.944">Progress</tspan></text>
	<text fill="black"><tspan x="145.5" y="150.444">${enStats.images} of ${enStats.total}&#10;</tspan><tspan x="145.5" y="171.444">${(100 * enStats.images / enStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="275" y="150.444">${frStats.images} of ${frStats.total}&#10;</tspan><tspan x="275" y="171.444">${(100 * frStats.images / frStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="404.5" y="150.444">${deStats.images} of ${deStats.total}&#10;</tspan><tspan x="404.5" y="171.444">${(100 * deStats.images / deStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="534" y="150.444">${itStats.images} of ${itStats.total}&#10;</tspan><tspan x="534" y="171.444">${(100 * itStats.images / itStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="663.5" y="150.444">${ptStats.images} of ${ptStats.total}&#10;</tspan><tspan x="663.5" y="171.444">${(100 * ptStats.images / ptStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="793" y="150.444">${esStats.images} of ${esStats.total}&#10;</tspan><tspan x="793" y="171.444">${(100 * esStats.images / esStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="922.5" y="150.444">${totalStats.images} of ${totalStats.total}&#10;</tspan><tspan x="922.5" y="171.444">${(100 * totalStats.images / totalStats.total).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="16" y="219.944">Total Progress</tspan></text>
	<text fill="black"><tspan x="145.5" y="209.444">${enStats.images + enStats.count} of ${enStats.total * 2}&#10;</tspan><tspan x="145.5" y="230.444">${(100 * (enStats.images + enStats.count) / (enStats.total * 2)).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="275" y="209.444">${frStats.images + frStats.count} of ${frStats.total * 2}&#10;</tspan><tspan x="275" y="230.444">${(100 * (frStats.images + frStats.count) / (frStats.total * 2)).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="404.5" y="209.444">${deStats.images + deStats.count} of ${deStats.total * 2}&#10;</tspan><tspan x="404.5" y="230.444">${(100 * (deStats.images + deStats.count) / (deStats.total * 2)).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="534" y="209.444">${itStats.images + itStats.count} of ${itStats.total * 2}&#10;</tspan><tspan x="534" y="230.444">${(100 * (itStats.images + itStats.count) / (itStats.total * 2)).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="663.5" y="209.444">${ptStats.images + ptStats.count} of ${ptStats.total * 2}&#10;</tspan><tspan x="663.5" y="230.444">${(100 * (ptStats.images + ptStats.count) / (ptStats.total * 2)).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="793" y="209.444">${esStats.images + esStats.count} of ${esStats.total * 2}&#10;</tspan><tspan x="793" y="230.444">${(100 * (esStats.images + esStats.count) / (esStats.total * 2)).toFixed(2)}%</tspan></text>
	<text fill="black"><tspan x="922.5" y="209.444">${totalStats.images + totalStats.count} of ${totalStats.total * 2}&#10;</tspan><tspan x="922.5" y="230.444">${(100 * (totalStats.images + totalStats.count) / (totalStats.total * 2)).toFixed(2)}%</tspan></text>
	</svg>
	`)
})
.get('/', (_, res): void => {

	res.send(`
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>TCGdex Project status</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style>
			td, th {
				border-left: black 1px solid;
				border-right: black 1px solid;
				border-top: black 1px solid;
				text-align: center;
			}
			tr:last-child td {
				border-bottom: black 1px solid;
			}
			th.notop {
				border-top: none;
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
			h1, h2 {
				margin: 1em 0;
				text-align: center;
			}
		</style>
	</head>
	<body>
	<h1>TCGdex Progress</h1>
		<table>
			<thead>
				<tr>
					<th class="na"></th>
					${objectMap(langsToName, (name) => `<td>${name}</td>`).join('')}
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th colspan="19">Card Progress</th>
				</tr>
				<tr>
					<td>Cards</td>
					${objectMap(langs, (it) => `<td>${it.count} of ${it.total}</td>`).join('')}
					<td>${totalStats.count} of ${totalStats.total}</td>
				</tr>
				<tr>
					<td>Percentage</td>
					${objectMap(langs, (it) => `<td>${(100 * it.count / it.total).toFixed(2)}%</td>`).join('')}
					<td>${(100 * totalStats.count / totalStats.total).toFixed(2)}%</td>
				</tr><tr>
					<td>Remaining</td>
					${objectMap(langs, (it) => `<td>${it.total} of ${it.total}</td>`).join('')}
					<td>${totalStats.total - totalStats.count}</td>
				</tr>

				<tr>
					<th colspan="19">Images Progress</th>
				</tr>
				<tr>
					<td>Cards</td>
					${objectMap(langs, (it) => `<td>${it.images} of ${it.total}</td>`).join('')}
					<td>${totalStats.images} of ${totalStats.total}</td>
				</tr><tr>
					<td>Percentage</td>
					${objectMap(langs, (it) => `<td>${(100 * it.images / it.total).toFixed(2)}%</td>`).join('')}
					<td>${(100 * totalStats.images / totalStats.total).toFixed(2)}%</td>
				</tr><tr>
					<td>Remaining</td>
					${objectMap(langs, (it) => `<td>${it.total - it.images}</td>`).join('')}
					<td>${totalStats.total - totalStats.images}</td>
				</tr>

				<tr>
					<th colspan="19">Total Progress</th>
				</tr>
				<tr>
					<td>Cards</td>
					${objectMap(langs, (it) => `<td>${it.images + it.count} of ${it.total * 2}</td>`).join('')}
					<td>${totalStats.images + totalStats.count} of ${totalStats.total * 2}</td>
				</tr><tr>
					<td>Percentage</td>
					${objectMap(langs, (it) => `<td>${(100 * (it.images + it.count) / (it.total * 2)).toFixed(2)}%</td>`).join('')}
					<td>${(100 * (totalStats.images + totalStats.count) / (totalStats.total * 2)).toFixed(2)}%</td>
				</tr><tr>
					<td>Remaining</td>
					${objectMap(langs, (it) => `<td>${it.total * 2 - (it.images + it.count)}</td>`).join('')}
					<td>${totalStats.total * 2 - (totalStats.images + totalStats.count)}</td>
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


		<table class="serie">
		${objectMap(setsData, (serie, serieId) => {
			// Loop through every series and name them
			const name = Serie.findOne('en', { filters: { id: serieId }})?.name
			return `
				<thead>
					<tr><th class="notop" colspan="35"><h2>${name} (${serieId})</h2></th></tr>
					<tr>
						<th rowspan="2">Set Name</th>
						${objectMap(langsToName, (name) => `<th colspan="2">${name}</th>`).join('')}
					</tr>

					<tr>
						${objectMap(langsToName, () => `<th>Cards</th><th>Images</th>`).join('')}
					</tr>
				</thead>
				<tbody>
					${objectMap(serie, (data, setId) => {
						// loop through every sets

						// find the set in the first available language (Should be English globally)
						const setTotal = Set.findOne(data[0] as 'en', { filters: { id: setId }})
						let str = '<tr>' + `<td>${setTotal?.name} (${setId}) <br />${setTotal?.cardCount.total ?? 1} cards</td>`
						// let str = '<tr>' + `<td>${setId})</td>`

						// Loop through every languages
						const l = objectKeys(langs)
						l.map((it) => {

							// Change the stats file depending on the language
							let stats: any = langs[it]

							// Get the stats we want
							const item = stats.sets[serieId]?.[setId] as {count: number, images: number} | undefined

							// if item dont exist for the language skip it
							if (!item) {
								str += `
								<td class="na"></td>
								<td class="na"></td>`
								return
							}

							// Calculate percentages and status
							const percent = 100 * item.count / (setTotal?.cardCount.total ?? 1)
							const imgPercent = 100 * item.images / (setTotal?.cardCount.total ?? 1)
							// const percent = 100 //100 * item.count / (setTotal?.cardCount.total ?? 1)
							// const imgPercent = 100 //100 * item.images / (setTotal?.cardCount.total ?? 1)

							// append to string :D
							str +=`<td class="${percent === 100 ? '' : percent === 0 ? 'empty' : 'missing-cards'}">${percent.toFixed(2)}% <br />(${item.count})</td>
							<td class="${imgPercent === 100 ? '' : imgPercent === 0 ? 'empty' : 'missing-img'}">${imgPercent.toFixed(2)}% <br />(${item.images})</td>`
						})

						// finish Row
						return str + '</tr>'
					}).join('')}
				</tbody>
			`}).join('')}
		</table>
	</body>
</html>
`)
})
