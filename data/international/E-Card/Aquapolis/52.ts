import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
		'de-de': "Magnetilo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [81],

	hp: 40,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Attract",
				'fr-fr': "Attraction",
				'de-de': "Attract"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it.",
				'fr-fr': "Choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur.",
				'de-de': "Choose 1 of your opponent´s Benched Pokémon and switch the Defending Pokémon with it."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87066,
				cardmarket: 275125
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87066,
				cardmarket: 275125
			}
		},
	]
}

export default card
