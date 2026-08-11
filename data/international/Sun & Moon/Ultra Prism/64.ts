import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Cranidos",
		'fr-fr': "Kranidos",
		'es-es': "Cranidos",
		'it-it': "Cranidos",
		'pt-br': "Cranidos",
		'de-de': "Koknodon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		408,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing Tire-Bouchon",
				'es-es': "Puño Tirabuzón",
				'it-it': "Pugno Rotante",
				'pt-br': "Soco Saca-rolha",
				'de-de': "Korkenzieherhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Headstrike",
				'fr-fr': "Coup de Tête",
				'es-es': "Testarada",
				'it-it': "Testata",
				'pt-br': "Golpe de Cabeça",
				'de-de': "Kopftreffer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In rock layers where Cranidos fossils are found, the fossilized trunks of trees snapped in two are also often found.",
	},

	thirdParty: {
		cardmarket: 315992,
		tcgplayer: 157681
	}
}

export default card
