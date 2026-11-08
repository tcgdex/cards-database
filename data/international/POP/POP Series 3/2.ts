import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [136],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme"
			},
			effect: {
				'en-us': "Discard 2 basic Energy cards attached to Flareon or this attack does nothing.",
				'fr-fr': "Défaussez 2 cartes Énergie de base attachées à Pyroli ou cette attaque est sans effet."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85495,
				cardmarket: 277450
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85495,
				cardmarket: 277450
			},
		},
	],

}

export default card
