import { Card } from 'models/database/card'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [128],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Tauros.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Tauros."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier"
			},
			effect: {
				'en-us': "Tauros does 10 damage to itself.",
				'fr-fr': "Tauros s'inflige 10 dégâts."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89762,
				cardmarket: 277436
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89762,
				cardmarket: 277436
			},
		},
	],

}

export default card
