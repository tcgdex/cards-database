import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'de-de': "Schneckmag"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [218],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Charge",
				'de-de': "Ram"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Luring Flame",
				'fr-fr': "Flamme attrayante",
				'de-de': "Luring Flame"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Burned.",
				'fr-fr': "Échangez un des Pokémon du Banc de votre adversaire avec le Pokémon Défenseur. Votre adversaire choisit le Pokémon Défenseur à échanger. Le nouveau Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Burned."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89340,
				cardmarket: 275949
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89340,
				cardmarket: 275949
			},
		},
	],

}

export default card
