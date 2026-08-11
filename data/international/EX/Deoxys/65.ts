import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'de-de': "Makuhita"
	},

	illustrator: "Asuka Iwashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		296,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Thrust",
				'fr-fr': "Coup d'pouce",
				'de-de': "Thrust"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, discard 1 Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile. Cette attaque est sans effet. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Flip a coin. If tails, this attack does nothing. If heads, discard 1 Energy card attached to the Defending Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rising Lunge",
				'fr-fr': "Botte secrète",
				'de-de': "Rising Lunge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87128,
				cardmarket: 276468
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87128,
				cardmarket: 276468
			},
		},
	],

}

export default card
