import { objectLoop, objectMap } from '@dzeio/object-util'
import { SupportedLanguages } from '@tcgdex/sdk'
import express from 'express'
import Serie from './V2/Components/Serie'
import Set from './V2/Components/Set'

const enStats = require('../generated/en/stats.json')
const frStats = require('../generated/fr/stats.json')
const deStats = require('../generated/de/stats.json')
const esStats = require('../generated/es/stats.json')
const itStats = require('../generated/it/stats.json')
const ptStats = require('../generated/pt/stats.json')

/**
 * This file is meant to contains the TCGdex Project status page.
 *
 */

/**
 * Simple calculation of maximum and current count globally
 */
const totalStats = {
	count: enStats.count + frStats.count + deStats.count + itStats.count + ptStats.count + esStats.count,
	total: enStats.total + frStats.total + deStats.total + itStats.total + ptStats.total + esStats.total,
	images: enStats.images + frStats.images + deStats.images + itStats.images + ptStats.images + esStats.images,
}

/**
 * Array containing data for sets, it also allow to display non english available sets
 * Serie
 * Set
 * Array of langs
 */
const setsData: Record<string, Record<string, Array<string>>> = {}

function preProcessSets(t: any, lang: SupportedLanguages) {
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

preProcessSets(enStats, 'en')
preProcessSets(frStats, 'fr')
preProcessSets(esStats, 'es')
preProcessSets(itStats, 'it')
preProcessSets(ptStats, 'pt')
preProcessSets(deStats, 'de')

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
	<h1>TCGdex Progress</h1>
	<table>
	<thead>
		<tr>
			<th class="na"></th>
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
			<th colspan="8">Card Progress</th>
		</tr>
		<tr>
			<td>Cards</td>
			<td>${enStats.count} of ${enStats.total}</td>
			<td>${frStats.count} of ${frStats.total}</td>
			<td>${deStats.count} of ${deStats.total}</td>
			<td>${itStats.count} of ${itStats.total}</td>
			<td>${ptStats.count} of ${ptStats.total}</td>
			<td>${esStats.count} of ${esStats.total}</td>
			<td>${totalStats.count} of ${totalStats.total}</td>
		</tr><tr>
		<td>Percentage</td>
			<td>${(100 * enStats.count / enStats.total).toFixed(2)}%</td>
			<td>${(100 * frStats.count / frStats.total).toFixed(2)}%</td>
			<td>${(100 * deStats.count / deStats.total).toFixed(2)}%</td>
			<td>${(100 * itStats.count / itStats.total).toFixed(2)}%</td>
			<td>${(100 * ptStats.count / ptStats.total).toFixed(2)}%</td>
			<td>${(100 * esStats.count / esStats.total).toFixed(2)}%</td>
			<td>${(100 * totalStats.count / totalStats.total).toFixed(2)}%</td>
		</tr><tr>
		<td>Remaining</td>
			<td>${enStats.total - enStats.count}</td>
			<td>${frStats.total - frStats.count}</td>
			<td>${deStats.total - deStats.count}</td>
			<td>${itStats.total - itStats.count}</td>
			<td>${ptStats.total - ptStats.count}</td>
			<td>${esStats.total - esStats.count}</td>
			<td>${totalStats.total - totalStats.count}</td>
		</tr>

		<tr>
			<th colspan="8">Images Progress</th>
		</tr>
		<tr>
			<td>Cards</td>
			<td>${enStats.images} of ${enStats.total}</td>
			<td>${frStats.images} of ${frStats.total}</td>
			<td>${deStats.images} of ${deStats.total}</td>
			<td>${itStats.images} of ${itStats.total}</td>
			<td>${ptStats.images} of ${ptStats.total}</td>
			<td>${esStats.images} of ${esStats.total}</td>
			<td>${totalStats.images} of ${totalStats.total}</td>
		</tr><tr>
		<td>Percentage</td>
			<td>${(100 * enStats.images / enStats.total).toFixed(2)}%</td>
			<td>${(100 * frStats.images / frStats.total).toFixed(2)}%</td>
			<td>${(100 * deStats.images / deStats.total).toFixed(2)}%</td>
			<td>${(100 * itStats.images / itStats.total).toFixed(2)}%</td>
			<td>${(100 * ptStats.images / ptStats.total).toFixed(2)}%</td>
			<td>${(100 * esStats.images / esStats.total).toFixed(2)}%</td>
			<td>${(100 * totalStats.images / totalStats.total).toFixed(2)}%</td>
		</tr><tr>
		<td>Remaining</td>
			<td>${enStats.total - enStats.images}</td>
			<td>${frStats.total - frStats.images}</td>
			<td>${deStats.total - deStats.images}</td>
			<td>${itStats.total - itStats.images}</td>
			<td>${ptStats.total - ptStats.images}</td>
			<td>${esStats.total - esStats.images}</td>
			<td>${totalStats.total - totalStats.images}</td>
		</tr>

		<tr>
			<th colspan="8">Total Progress</th>
		</tr>
		<tr>
			<td>Cards</td>
			<td>${enStats.images + enStats.count} of ${enStats.total * 2}</td>
			<td>${frStats.images + frStats.count} of ${frStats.total * 2}</td>
			<td>${deStats.images + deStats.count} of ${deStats.total * 2}</td>
			<td>${itStats.images + itStats.count} of ${itStats.total * 2}</td>
			<td>${ptStats.images + ptStats.count} of ${ptStats.total * 2}</td>
			<td>${esStats.images + esStats.count} of ${esStats.total * 2}</td>
			<td>${totalStats.images + totalStats.count} of ${totalStats.total * 2}</td>
		</tr><tr>
		<td>Percentage</td>
			<td>${(100 * (enStats.images + enStats.count) / (enStats.total * 2)).toFixed(2)}%</td>
			<td>${(100 * (frStats.images + frStats.count) / (frStats.total * 2)).toFixed(2)}%</td>
			<td>${(100 * (deStats.images + deStats.count) / (deStats.total * 2)).toFixed(2)}%</td>
			<td>${(100 * (itStats.images + itStats.count) / (itStats.total * 2)).toFixed(2)}%</td>
			<td>${(100 * (ptStats.images + ptStats.count) / (ptStats.total * 2)).toFixed(2)}%</td>
			<td>${(100 * (esStats.images + esStats.count) / (esStats.total * 2)).toFixed(2)}%</td>
			<td>${(100 * (totalStats.images + totalStats.count) / (totalStats.total * 2)).toFixed(2)}%</td>
		</tr><tr>
		<td>Remaining</td>
			<td>${enStats.total * 2 - (enStats.images + enStats.count)}</td>
			<td>${frStats.total * 2 - (frStats.images + frStats.count)}</td>
			<td>${deStats.total * 2 - (deStats.images + deStats.count)}</td>
			<td>${itStats.total * 2 - (itStats.images + itStats.count)}</td>
			<td>${ptStats.total * 2 - (ptStats.images + ptStats.count)}</td>
			<td>${esStats.total * 2 - (esStats.images + esStats.count)}</td>
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
		const name = Serie.findOne('en', {id: serieId})?.name
		return `
			<thead>
				<tr><th class="notop" colspan="13"><h2>${name} (${serieId})</h2></th></tr>
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
				${objectMap(serie, (data, setId) => {
					// loop through every sets

					// find the set in the first available language (Should be English globally)
					const setTotal = Set.findOne(data[0] as 'en', {id: setId})
					let str = '<tr>' + `<td>${setTotal?.name} (${setId}) <br />${setTotal?.cardCount.total ?? 1} cards</td>`

					// Loop through every languages
					const l = ['en', 'fr', 'de', 'it', 'pt', 'es']
					l.map((it) => {

						// Change the stats file depending on the language
						let stats: any = enStats
						switch (it) {
							case 'fr': stats = frStats; break
							case 'de': stats = deStats; break
							case 'it': stats = itStats; break
							case 'pt': stats = ptStats; break
							case 'es': stats = esStats; break
						}

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

						// append to string :D
						str +=`<td class="${percent === 100 ? '' : percent === 0 ? 'empty' : 'missing-cards'}">${percent.toFixed(2)}% <br />(${item.count})</td>
						<td class="${imgPercent === 100 ? '' : imgPercent === 0 ? 'empty' : 'missing-img'}">${imgPercent.toFixed(2)}% <br />(${item.images})</td>`
					})

					// finish Row
					return str + '</tr>'
				}).join('')}
			</tbody>
		`}).join('')}
	</table>`)
})
