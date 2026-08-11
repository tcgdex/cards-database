import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fin",
				'fr-fr': "Aileron aiguisé",
				'de-de': "Sharp Fin"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Splash",
				'fr-fr': "Hypnoplouf",
				'de-de': "Hypno Splash"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 88685,
		cardmarket: 276529
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88685,
				cardmarket: 276529
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88685,
				cardmarket: 276529
			},
		}
	],
}

export default card
