import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'de-de': "Golking"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Seaking.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Poissoroy.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Golking zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal'korne",
				'de-de': "Hornbohrer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It makes its nest by hollowing out boulders in streams with its horn. It defends its eggs with its life.",
		'fr-fr': "Il niche dans des rochers du ruisseau qu'il évide avec sa corne. Il donnerait sa vie pour ses œufs."
	},

	thirdParty: {
		cardmarket: 277561,
		tcgplayer: 89026
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
