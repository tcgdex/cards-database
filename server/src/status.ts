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
	objectLoop(t.sets, (sets, serieId) => {
		if (!(serieId in setsData)) {
			setsData[serieId] = {}
		}
		objectLoop(sets, (_, set) => {
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


export default express.Router().get('/', (_, res): void => {

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
