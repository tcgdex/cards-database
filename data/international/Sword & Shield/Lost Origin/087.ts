import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [67],
	set: Set,

	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'it-it': "Forza",
			'pt-br': "Força",
			'de-de': "Stärke"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'it-it': "Movimento Sismico",
			'pt-br': "Arremesso Sísmico",
			'de-de': "Geowurf"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674100,
				tcgplayer: 283973
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674100,
				tcgplayer: 283973
			}
		},
	],
}

export default card
