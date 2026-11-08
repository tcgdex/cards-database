import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'es-es': "Zweilous",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'de-de': "Duodino"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		634,
	],

	hp: 90,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Draw In",
				'fr-fr': "Aspiracartes",
			},
			effect: {
				'en-us': "Attach 2 Darkness Energy cards from your discard pile to this Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie Darkness de votre pile de défausse à ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Headbutt",
				'fr-fr': "Dracoud'Boule",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Since their two heads do not get along and compete with each other for food, they always eat too much.",
	},

	thirdParty: {
		cardmarket: 280534,
		tcgplayer: 90781
	}
}

export default card
