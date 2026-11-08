import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'es-mx': "Krokorok",
		'de-de': "Rokkaiman",
		'it-it': "Krokorok",
		'pt-br': "Krokorok"
	},

	evolveFrom: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'es-es': "Sandile",
		'es-mx': "Sandile",
		'de-de': "Ganovil",
		'it-it': "Sandile",
		'pt-br': "Sandile",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [552],
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'es-mx': "Mordida",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Confront",
			'fr-fr': "Confrontation",
			'es-es': "Confrontar",
			'es-mx': "Confrontar",
			'de-de': "Konfrontieren",
			'it-it': "Confronto",
			'pt-br': "Confrontar"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Protected by thin membranes, their eyes can see even in the dead of night. They live in groups of a few individuals.",
	},

	illustrator: "Uninori",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857640,
				tcgplayer: 662173,
				cardtrader: 356849
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857640,
				tcgplayer: 662173,
				cardtrader: 356849
			}
		},
	],
}

export default card
