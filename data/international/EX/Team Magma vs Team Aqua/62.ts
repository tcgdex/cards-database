import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Houndour",
		'fr-fr': "Malosse de Team Magma",
		'de-de': "Team Magmas Hunduster"
	},

	illustrator: "Atsuko Ujiie",
	rarity: "Common",
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
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Combustion"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Super Singe",
				'fr-fr': "Ça sent le roussi !",
				'de-de': "Super Singe"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "The Defending Pokémon is now Burned."
			},
			damage: 10,

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
				cardmarket: 275839,
				tcgplayer: 89831
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275839,
				tcgplayer: 89831
			}
		},
	],

}

export default card
