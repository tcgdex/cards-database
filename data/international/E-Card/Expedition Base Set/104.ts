import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre",
		'de-de': "Feurigel"
	},

	illustrator: "Sachi Matoba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [155],

	hp: 40,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Singe",
				'fr-fr': "Roussir",
				'de-de': "Singe"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Burned."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

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
				tcgplayer: 84547,
				cardmarket: 274979
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84547,
				cardmarket: 274979
			},
		},
	],
}

export default card
