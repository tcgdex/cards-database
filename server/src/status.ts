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
	'zh-cn': zhcn,
	'zh-tw': zhtw,
	'nl': nl,
	'en': en,
	'fr': fr,
	'de': de,
	'id': id,
	'it': it,
	'ja': ja,
	'ko': ko,
	'pl': pl,
	'pt': pt,
	// 'pt-br': ptbr,
	'pt-pt': ptpt,
	'ru': ru,
	'es': es,
	'th': th,
} as const

const langsToName = {
	'zh-cn': 'Chinese (simplified)',
	'zh-tw': 'Chinese (traditionnal)',
	'nl': 'Dutch',
	'en': 'English',
	'fr': 'French',
	'de': 'German',
	'id': 'Indonesian',
	'it': 'Italian',
	'ja': 'Japanese',
	'ko': 'Korean',
	'pl': 'Polish',
	'pt': 'Portuguese (Brazil)',
	// 'pt-br': 'Portuguese (brazil)',
	'pt-pt': 'Portuguese (Portugal)',
	'ru': 'Russian',
	'es': 'Spanish',
	'th': 'Thai',

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
const asiaLangs = [
	'ja',
	'ko',
	'zh-tw',
	'id',
	'th',
	'zh-cn',
]
const totalInter = {
	count: objectMap(langs, (it, key) => asiaLangs.includes(key) ? 0 : it.count).reduce((p, c) => p + c, 0),
	total: objectMap(langs, (it, key) => asiaLangs.includes(key) ? 0 : it.total).reduce((p, c) => p + c, 0),
	images: objectMap(langs, (it, key) => asiaLangs.includes(key) ? 0 : it.images).reduce((p, c) => p + c, 0),
}
const totalAsia = {
	count: objectMap(langs, (it, key) => asiaLangs.includes(key) ? it.count : 0).reduce((p, c) => p + c, 0),
	total: objectMap(langs, (it, key) => asiaLangs.includes(key) ? it.total : 0).reduce((p, c) => p + c, 0),
	images: objectMap(langs, (it, key) => asiaLangs.includes(key) ? it.images : 0).reduce((p, c) => p + c, 0),
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

// <text fill="black"><tspan x="145.5" y="80.944">${enStats.count} of ${enStats.total}&#10;</tspan><tspan x="145.5" y="101.944">${(100 * enStats.count / enStats.total).toFixed(2)}%</tspan></text>


// Yes this is ugly
export default express.Router()
.get('/github.svg', (_, res): void => {
	res.setHeader('Content-Type', 'image/svg+xml')
	res.send(`<svg width="1429" height="726" viewBox="0 0 1429 726" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect width="1429" height="726" fill="white"/>
	<path d="M0 16C0 7.16344 7.16344 0 16 0H1413C1421.84 0 1429 7.16344 1429 16V47C1429 55.8366 1421.84 63 1413 63H16C7.1634 63 0 55.8366 0 47V16Z" fill="#EEEEEE"/>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="136.409" y="37.5">Dutch</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="252.227" y="37.5">English</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="374.545" y="37.5">French</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="490.364" y="37.5">German</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="616.182" y="37.5">Italian</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="740.5" y="37.5">Polish</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="839.763" y="27.5">Portuguese&#10;</tspan><tspan x="856.138" y="47.5">(Brazil)</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="960.582" y="27.5">Portuguese&#10;</tspan><tspan x="965.238" y="47.5">(Portugal)</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1095.45" y="37.5">Russian</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1215.77" y="37.5">Spanish</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1325.59" y="37.5">Total Inter</tspan></text>
	<rect width="1429" height="100" transform="translate(0 63)" fill="#FAFAFA"/>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="25.3359" y="109">Cards&#10;</tspan><tspan x="13.7266" y="129">Progress</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="129.616" y="89">${langs['nl'].count}&#10;</tspan><tspan x="149.506" y="109">of&#10;</tspan><tspan x="129.616" y="129">${langs['nl'].total}&#10;</tspan><tspan x="132.858" y="149">(${(100 * langs['nl'].count / langs['nl'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="250.707" y="89">${langs['en'].count}&#10;</tspan><tspan x="270.597" y="109">of&#10;</tspan><tspan x="250.707" y="129">${langs['en'].total}&#10;</tspan><tspan x="253.949" y="149">(${(100 * langs['en'].count / langs['en'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="371.798" y="89">${langs['fr'].count}&#10;</tspan><tspan x="391.688" y="109">of&#10;</tspan><tspan x="371.798" y="129">${langs['fr'].total}&#10;</tspan><tspan x="375.04" y="149">(${(100 * langs['fr'].count / langs['fr'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="492.888" y="89">${langs['de'].count}&#10;</tspan><tspan x="512.779" y="109">of&#10;</tspan><tspan x="492.888" y="129">${langs['de'].total}&#10;</tspan><tspan x="496.131" y="149">(${(100 * langs['de'].count / langs['de'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="613.979" y="89">${langs['it'].count}&#10;</tspan><tspan x="633.87" y="109">of&#10;</tspan><tspan x="613.979" y="129">${langs['it'].total}&#10;</tspan><tspan x="617.222" y="149">(${(100 * langs['it'].count / langs['it'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="89">${langs['pl'].count}&#10;</tspan><tspan x="754.961" y="109">of&#10;</tspan><tspan x="735.07" y="129">${langs['pl'].total}&#10;</tspan><tspan x="738.312" y="149">(${(100 * langs['pl'].count / langs['pl'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="856.161" y="89">${langs['pt'].count}&#10;</tspan><tspan x="876.052" y="109">of&#10;</tspan><tspan x="856.161" y="129">${langs['pt'].total}&#10;</tspan><tspan x="859.403" y="149">(${(100 * langs['pt'].count / langs['pt'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="977.252" y="89">${langs['pt-pt'].count}&#10;</tspan><tspan x="997.143" y="109">of&#10;</tspan><tspan x="977.252" y="129">${langs['pt-pt'].total}&#10;</tspan><tspan x="980.494" y="149">(${(100 * langs['pt-pt'].count / langs['pt-pt'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1098.34" y="89">${langs['ru'].count}&#10;</tspan><tspan x="1118.23" y="109">of&#10;</tspan><tspan x="1098.34" y="129">${langs['ru'].total}&#10;</tspan><tspan x="1101.59" y="149">(${(100 * langs['ru'].count / langs['ru'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1219.43" y="89">${langs['es'].count}&#10;</tspan><tspan x="1239.32" y="109">of&#10;</tspan><tspan x="1219.43" y="129">${langs['es'].total}&#10;</tspan><tspan x="1222.68" y="149">(${(100 * langs['es'].count / langs['es'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1340.52" y="89">${totalInter.count}&#10;</tspan><tspan x="1360.42" y="109">of&#10;</tspan><tspan x="1340.52" y="129">${totalInter.total}&#10;</tspan><tspan x="1343.77" y="149">(${(100 * totalInter.count / totalInter.total).toFixed(2)}%)</tspan></text>
	<rect width="1429" height="100" transform="translate(0 163)" fill="#FAFAFA"/>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="17.5391" y="209">Images&#10;</tspan><tspan x="13.7266" y="229">Progress</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="129.616" y="189">${langs['nl'].images}&#10;</tspan><tspan x="149.506" y="209">of&#10;</tspan><tspan x="129.616" y="229">${langs['nl'].total}&#10;</tspan><tspan x="132.858" y="249">(${(100 * langs['nl'].images / langs['nl'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="250.707" y="189">${langs['en'].images}&#10;</tspan><tspan x="270.597" y="209">of&#10;</tspan><tspan x="250.707" y="229">${langs['en'].total}&#10;</tspan><tspan x="253.949" y="249">(${(100 * langs['en'].images / langs['en'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="371.798" y="189">${langs['fr'].images}&#10;</tspan><tspan x="391.688" y="209">of&#10;</tspan><tspan x="371.798" y="229">${langs['fr'].total}&#10;</tspan><tspan x="375.04" y="249">(${(100 * langs['fr'].images / langs['fr'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="492.888" y="189">${langs['de'].images}&#10;</tspan><tspan x="512.779" y="209">of&#10;</tspan><tspan x="492.888" y="229">${langs['de'].total}&#10;</tspan><tspan x="496.131" y="249">(${(100 * langs['de'].images / langs['de'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="613.979" y="189">${langs['it'].images}&#10;</tspan><tspan x="633.87" y="209">of&#10;</tspan><tspan x="613.979" y="229">${langs['it'].total}&#10;</tspan><tspan x="617.222" y="249">(${(100 * langs['it'].images / langs['it'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="189">${langs['pl'].images}&#10;</tspan><tspan x="754.961" y="209">of&#10;</tspan><tspan x="735.07" y="229">${langs['pl'].total}&#10;</tspan><tspan x="738.312" y="249">(${(100 * langs['pl'].images / langs['pl'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="856.161" y="189">${langs['pt'].images}&#10;</tspan><tspan x="876.052" y="209">of&#10;</tspan><tspan x="856.161" y="229">${langs['pt'].total}&#10;</tspan><tspan x="859.403" y="249">(${(100 * langs['pt'].images / langs['pt'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="977.252" y="189">${langs['pt-pt'].images}&#10;</tspan><tspan x="997.143" y="209">of&#10;</tspan><tspan x="977.252" y="229">${langs['pt-pt'].total}&#10;</tspan><tspan x="980.494" y="249">(${(100 * langs['pt-pt'].images / langs['pt-pt'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1098.34" y="189">${langs['ru'].images}&#10;</tspan><tspan x="1118.23" y="209">of&#10;</tspan><tspan x="1098.34" y="229">${langs['ru'].total}&#10;</tspan><tspan x="1101.59" y="249">(${(100 * langs['ru'].images / langs['ru'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1219.43" y="189">${langs['es'].images}&#10;</tspan><tspan x="1239.32" y="209">of&#10;</tspan><tspan x="1219.43" y="229">${langs['es'].total}&#10;</tspan><tspan x="1222.68" y="249">(${(100 * langs['es'].images / langs['es'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1340.52" y="189">${totalInter.images}&#10;</tspan><tspan x="1360.42" y="209">of&#10;</tspan><tspan x="1340.52" y="229">${totalInter.total}&#10;</tspan><tspan x="1343.77" y="249">(${(100 * totalInter.images / totalInter.total).toFixed(2)}%)</tspan></text>
	<rect width="1429" height="100" transform="translate(0 263)" fill="#FAFAFA"/>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="28.5859" y="309">Total&#10;</tspan><tspan x="13.7266" y="329">Progress</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="129.616" y="289">${langs['nl'].count + langs['nl'].images}&#10;</tspan><tspan x="149.506" y="309">of&#10;</tspan><tspan x="129.616" y="329">${langs['nl'].total * 2}&#10;</tspan><tspan x="132.858" y="349">(${(100 * (langs['nl'].count + langs['nl'].images) / (langs['nl'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="250.707" y="289">${langs['en'].count + langs['en'].images}&#10;</tspan><tspan x="270.597" y="309">of&#10;</tspan><tspan x="250.707" y="329">${langs['en'].total * 2}&#10;</tspan><tspan x="253.949" y="349">(${(100 * (langs['en'].count + langs['en'].images) / (langs['en'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="371.798" y="289">${langs['fr'].count + langs['fr'].images}&#10;</tspan><tspan x="391.688" y="309">of&#10;</tspan><tspan x="371.798" y="329">${langs['fr'].total * 2}&#10;</tspan><tspan x="375.04" y="349">(${(100 * (langs['fr'].count + langs['fr'].images) / (langs['fr'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="492.888" y="289">${langs['de'].count + langs['de'].images}&#10;</tspan><tspan x="512.779" y="309">of&#10;</tspan><tspan x="492.888" y="329">${langs['de'].total * 2}&#10;</tspan><tspan x="496.131" y="349">(${(100 * (langs['de'].count + langs['de'].images) / (langs['de'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="613.979" y="289">${langs['it'].count + langs['it'].images}&#10;</tspan><tspan x="633.87" y="309">of&#10;</tspan><tspan x="613.979" y="329">${langs['it'].total * 2}&#10;</tspan><tspan x="617.222" y="349">(${(100 * (langs['it'].count + langs['it'].images) / (langs['it'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="289">${langs['pl'].count + langs['pl'].images}&#10;</tspan><tspan x="754.961" y="309">of&#10;</tspan><tspan x="735.07" y="329">${langs['pl'].total * 2}&#10;</tspan><tspan x="738.312" y="349">(${(100 * (langs['pl'].count + langs['pl'].images) / (langs['pl'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="856.161" y="289">${langs['pt'].count + langs['pt'].images}&#10;</tspan><tspan x="876.052" y="309">of&#10;</tspan><tspan x="856.161" y="329">${langs['pt'].total * 2}&#10;</tspan><tspan x="859.403" y="349">(${(100 * (langs['pt'].count + langs['pt'].images) / (langs['pt'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="977.252" y="289">${langs['pt-pt'].count + langs['pt-pt'].images}&#10;</tspan><tspan x="997.143" y="309">of&#10;</tspan><tspan x="977.252" y="329">${langs['pt-pt'].total * 2}&#10;</tspan><tspan x="980.494" y="349">(${(100 * (langs['pt-pt'].count + langs['pt-pt'].images) / (langs['pt-pt'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1098.34" y="289">${langs['ru'].count + langs['ru'].images}&#10;</tspan><tspan x="1118.23" y="309">of&#10;</tspan><tspan x="1098.34" y="329">${langs['ru'].total * 2}&#10;</tspan><tspan x="1101.59" y="349">(${(100 * (langs['ru'].count + langs['ru'].images) / (langs['ru'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1219.43" y="289">${langs['es'].count + langs['es'].images}&#10;</tspan><tspan x="1239.32" y="309">of&#10;</tspan><tspan x="1219.43" y="329">${langs['es'].total * 2}&#10;</tspan><tspan x="1222.68" y="349">(${(100 * (langs['es'].count + langs['es'].images) / (langs['es'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1340.52" y="289">${totalInter.images + totalInter.count}&#10;</tspan><tspan x="1360.42" y="309">of&#10;</tspan><tspan x="1340.52" y="329">${totalInter.total * 2}&#10;</tspan><tspan x="1343.77" y="349">(${(100 * (totalInter.count + totalInter.images) / (totalInter.total * 2)).toFixed(2)}%)</tspan></text>
	<path d="M0 379C0 370.163 7.16344 363 16 363H1413C1421.84 363 1429 370.163 1429 379V410C1429 418.837 1421.84 426 1413 426H16C7.1634 426 0 418.837 0 410V379Z" fill="#EEEEEE"/>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="163.718" y="390.5">Chinese&#10;</tspan><tspan x="139.975" y="410.5">(Traditionnal)</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="353.575" y="390.5">Chinese&#10;</tspan><tspan x="338.176" y="410.5">(Simplified)</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="528.643" y="400.5">Indonesian</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="725.5" y="400.5">Japanese</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="925.357" y="400.5">Korean</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1126.21" y="400.5">Thai</tspan></text>
	<text fill="#757575" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1294.07" y="400.5">Total Asia</tspan></text>
	<rect width="1429" height="100" transform="translate(0 426)" fill="#FAFAFA"/>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="25.3359" y="472">Cards&#10;</tspan><tspan x="13.7266" y="492">Progress</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="164.213" y="452">${langs['zh-tw'].count}&#10;</tspan><tspan x="184.104" y="472">of&#10;</tspan><tspan x="164.213" y="492">${langs['zh-tw'].total}&#10;</tspan><tspan x="167.455" y="512">(${(100 * langs['zh-tw'].count / langs['zh-tw'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="354.499" y="452">${langs['zh-cn'].count}&#10;</tspan><tspan x="374.39" y="472">of&#10;</tspan><tspan x="354.499" y="492">${langs['zh-cn'].total}&#10;</tspan><tspan x="357.741" y="512">(${(100 * langs['zh-cn'].count / langs['zh-cn'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="544.785" y="452">${langs['id'].count}&#10;</tspan><tspan x="564.675" y="472">of&#10;</tspan><tspan x="544.785" y="492">${langs['id'].total}&#10;</tspan><tspan x="548.027" y="512">(${(100 * langs['id'].count / langs['id'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="452">${langs['ja'].count}&#10;</tspan><tspan x="754.961" y="472">of&#10;</tspan><tspan x="735.07" y="492">${langs['ja'].total}&#10;</tspan><tspan x="738.312" y="512">(${(100 * langs['ja'].count / langs['ja'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="925.356" y="452">${langs['ko'].count}&#10;</tspan><tspan x="945.247" y="472">of&#10;</tspan><tspan x="925.356" y="492">${langs['ko'].total}&#10;</tspan><tspan x="928.598" y="512">(${(100 * langs['ko'].count / langs['ko'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1115.64" y="452">${langs['th'].count}&#10;</tspan><tspan x="1135.53" y="472">of&#10;</tspan><tspan x="1115.64" y="492">${langs['th'].total}&#10;</tspan><tspan x="1118.88" y="512">(${(100 * langs['th'].count / langs['th'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1305.93" y="452">${totalAsia.count}&#10;</tspan><tspan x="1325.82" y="472">of&#10;</tspan><tspan x="1305.93" y="492">${totalAsia.total}&#10;</tspan><tspan x="1309.17" y="512">(${(100 * totalAsia.count / totalAsia.total).toFixed(2)}%)</tspan></text>
	<rect width="1429" height="100" transform="translate(0 526)" fill="#FAFAFA"/>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="17.5391" y="572">Images&#10;</tspan><tspan x="13.7266" y="592">Progress</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="164.213" y="552">${langs['zh-tw'].images}&#10;</tspan><tspan x="184.104" y="572">of&#10;</tspan><tspan x="164.213" y="592">${langs['zh-tw'].total}&#10;</tspan><tspan x="167.455" y="612">(${(100 * langs['zh-tw'].images / langs['zh-tw'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="354.499" y="552">${langs['zh-cn'].images}&#10;</tspan><tspan x="374.39" y="572">of&#10;</tspan><tspan x="354.499" y="592">${langs['zh-cn'].total}&#10;</tspan><tspan x="357.741" y="612">(${(100 * langs['zh-cn'].images / langs['zh-cn'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="544.785" y="552">${langs['id'].images}&#10;</tspan><tspan x="564.675" y="572">of&#10;</tspan><tspan x="544.785" y="592">${langs['id'].total}&#10;</tspan><tspan x="548.027" y="612">(${(100 * langs['id'].images / langs['id'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="552">${langs['ja'].images}&#10;</tspan><tspan x="754.961" y="572">of&#10;</tspan><tspan x="735.07" y="592">${langs['ja'].total}&#10;</tspan><tspan x="738.312" y="612">(${(100 * langs['ja'].images / langs['ja'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="925.356" y="552">${langs['ko'].images}&#10;</tspan><tspan x="945.247" y="572">of&#10;</tspan><tspan x="925.356" y="592">${langs['ko'].total}&#10;</tspan><tspan x="928.598" y="612">(${(100 * langs['ko'].images / langs['ko'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1115.64" y="552">${langs['th'].images}&#10;</tspan><tspan x="1135.53" y="572">of&#10;</tspan><tspan x="1115.64" y="592">${langs['th'].total}&#10;</tspan><tspan x="1118.88" y="612">(${(100 * langs['th'].images / langs['th'].total).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1305.93" y="552">${totalAsia.images}&#10;</tspan><tspan x="1325.82" y="572">of&#10;</tspan><tspan x="1305.93" y="592">${totalAsia.total}&#10;</tspan><tspan x="1309.17" y="612">(${(100 * totalAsia.images / totalAsia.total).toFixed(2)}%)</tspan></text>
	<rect width="1429" height="100" transform="translate(0 626)" fill="#FAFAFA"/>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="28.5859" y="672">Total&#10;</tspan><tspan x="13.7266" y="692">Progress</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="164.213" y="652">${langs['zh-tw'].count + langs['zh-tw'].images}&#10;</tspan><tspan x="184.104" y="672">of&#10;</tspan><tspan x="164.213" y="692">${langs['zh-tw'].total * 2}&#10;</tspan><tspan x="167.455" y="712">(${(100 * (langs['zh-tw'].count + langs['zh-tw'].images) / (langs['zh-tw'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="354.499" y="652">${langs['zh-cn'].count + langs['zh-cn'].images}&#10;</tspan><tspan x="374.39" y="672">of&#10;</tspan><tspan x="354.499" y="692">${langs['zh-cn'].total * 2}&#10;</tspan><tspan x="357.741" y="712">(${(100 * (langs['zh-cn'].count + langs['zh-cn'].images) / (langs['zh-cn'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="544.785" y="652">${langs['id'].count + langs['id'].images}&#10;</tspan><tspan x="564.675" y="672">of&#10;</tspan><tspan x="544.785" y="692">${langs['id'].total * 2}&#10;</tspan><tspan x="548.027" y="712">(${(100 * (langs['id'].count + langs['id'].images) / (langs['id'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="735.07" y="652">${langs['ja'].count + langs['ja'].images}&#10;</tspan><tspan x="754.961" y="672">of&#10;</tspan><tspan x="735.07" y="692">${langs['ja'].total * 2}&#10;</tspan><tspan x="738.312" y="712">(${(100 * (langs['ja'].count + langs['ja'].images) / (langs['ja'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="925.356" y="652">${langs['ko'].count + langs['ko'].images}&#10;</tspan><tspan x="945.247" y="672">of&#10;</tspan><tspan x="925.356" y="692">${langs['ko'].total * 2}&#10;</tspan><tspan x="928.598" y="712">(${(100 * (langs['ko'].count + langs['ko'].images) / (langs['ko'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1115.64" y="652">${langs['th'].count + langs['th'].images}&#10;</tspan><tspan x="1135.53" y="672">of&#10;</tspan><tspan x="1115.64" y="692">${langs['th'].total * 2}&#10;</tspan><tspan x="1118.88" y="712">(${(100 * (langs['th'].count + langs['th'].images) / (langs['th'].total * 2)).toFixed(2)}%)</tspan></text>
	<text fill="#212121" xml:space="preserve" style="white-space: pre" font-family="Arial" font-size="16" font-weight="600" letter-spacing="0em"><tspan x="1305.93" y="652">${totalAsia.count + totalAsia.images}&#10;</tspan><tspan x="1325.82" y="672">of&#10;</tspan><tspan x="1305.93" y="692">${totalAsia.total * 2}&#10;</tspan><tspan x="1309.17" y="712">(${(100 * (totalAsia.count + totalAsia.images) / (totalAsia.total * 2)).toFixed(2)}%)</tspan></text>
</svg>`)
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
					${objectMap(langs, (it) => `<td>${it.total - it.count}</td>`).join('')}
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
			const name = Serie.findOne('en', { filters: { id: serieId }})?.name ?? Serie.findOne('ja', { filters: { id: serieId }})?.name
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
								str += `<td class="na" /><td class="na" />`
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
