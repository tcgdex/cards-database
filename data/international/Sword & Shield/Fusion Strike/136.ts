import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'es-es': "Graveler",
		'it-it': "Graveler",
		'pt-br': "Graveler",
		'de-de': "Georok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'es-es': "Geodude",
		'it-it': "Geodude",
		'pt-br': "Geodude",
		'de-de': "Kleinstein"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "Masakazu Fukuda",

	description: {
		'en-us': "It travels by rolling down cliffs. If it falls into a river, it will explode with its last gasp."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'it-it': "Azione"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Boulder Crush",
			'fr-fr': "Rocher Écrasant",
			'de-de': "Felsenquetscher",
			'es-es': "Alud de Rocas",
			'pt-br': "Rocha Esmagadora",
			'it-it': "Macignata"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582718,
				tcgplayer: 253341
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582718,
				tcgplayer: 253341
			}
		},
	],
}

export default card
