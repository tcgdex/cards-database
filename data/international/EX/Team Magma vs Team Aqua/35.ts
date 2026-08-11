import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Houndour",
		'fr-fr': "Malosse de Team Magma",
		'de-de': "Team Magmas Hunduster"
	},

	illustrator: "Atsuko Ujiie",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [228],

	hp: 50,

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
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Shock",
				'fr-fr': "Sombre choc",
				'de-de': "Dark Shock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275812,
				tcgplayer: 89830
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275812,
				tcgplayer: 89830
			}
		},
	],

}

export default card
