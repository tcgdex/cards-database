import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [119],
	set: Set,

	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless"
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Seaking.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Poissoroy."
			},
			damage: "10×"
		},
		{
			cost: [
				"Water",
				"Water"
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal'korne"
			},
			damage: 50
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	description: {
		'en-us': "It makes its nest by hollowing out boulders in streams with its horn. It defends its eggs with its life."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278022,
				tcgplayer: 89027
			}
		},
	],

}

export default card
