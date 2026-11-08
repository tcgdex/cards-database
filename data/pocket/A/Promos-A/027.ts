import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Snivy",
		'fr-fr': "Vipélierre",
		'es-es': "Snivy",
		'it-it': "Snivy",
		'de-de': "Serpifeu",
		'pt-br': "Snivy",
		'ko-kr': "주리비얀"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "None",
	category: "Pokemon",

	dexId: [495],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "Being exposed to sunlight makes its movements\nswifter. It uses vines more adeptly than its hands.",
		'fr-fr': "La lumière du soleil augmente fortement son agilité.\nSes lianes sont plus habiles que ses mains.",
		'es-es': "Cuando recibe los rayos de sol, se mueve\nmucho más rápido que de costumbre.\nUsa mejor sus lianas que sus manos.",
		'it-it': "Quando è esposto alla luce solare può muoversi più\nvelocemente. Usa le sue liane meglio dei suoi stessi arti.",
		'de-de': "Im Sonnenlicht erhöht sich das Tempo\nseiner Bewegungen. Es ist mit seinen\nSchlingen geschickter als mit den Händen.",
		'pt-br': "Quando exposto à luz solar, seus movimentos tornam-se mais\nrápidos. Ele usa as trepadeiras com mais destreza que suas mãos.",
		'ko-kr': "태양의 빛을 받으면\n평소보다 빨리 움직일 수 있다.\n손보다 덩굴을 잘 사용한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol3"]
}

export default card
