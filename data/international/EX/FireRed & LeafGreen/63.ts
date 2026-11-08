import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'de-de': "Nebulak"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slow Trip Gas",
				'fr-fr': "Gaz ralentisseur",
				'de-de': "Slow Trip Gas"
			},
			effect: {
				'en-us': "At the end of your opponent's next turn, the Defending Pokémon is now Confused.",
				'fr-fr': "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Confus.",
				'de-de': "At the end of your opponent's next turn, the Defending Pokémon is now Confused."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276239,
				tcgplayer: 85650
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276239,
				tcgplayer: 85650
			},
		},
	],
}

export default card
