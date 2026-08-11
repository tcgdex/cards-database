import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [459],
	set: Set,

	name: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'de-de': "Shnebedeck",
		'it-it': "Snover",
		'es-es': "Snover",
		'pt-br': "Snover",
		'es-mx': "Snover"
	},


	illustrator: "Tomokazu Komiya",

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'de-de': "Leichter Hieb",
			'it-it': "Pugnetto",
			'es-es': "Puño Ligero",
			'pt-br': "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Icicle",
			'fr-fr': "Concrétion Glacée",
			'de-de': "Eiszapfen",
			'it-it': "Stalattite",
			'es-es': "Témpano",
			'pt-br': "Pingente de Gelo",
			'es-mx': "Témpano de Hielo"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825933,
				tcgplayer: 632872
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825933,
				tcgplayer: 632872
			}
		},
	],
}

export default card
