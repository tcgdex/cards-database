import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka",
		'de-de': "Meditie"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [307],

	hp: 50,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Meditite",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud'poing",
				'de-de': "Punch"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Meditate",
				'fr-fr': "Yoga",
				'de-de': "Meditate"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87278,
				cardmarket: 275914
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87278,
				cardmarket: 275914
			},
		},
	],

}

export default card
