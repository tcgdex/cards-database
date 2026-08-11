import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'de-de': "Alpollo"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [93],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Nightmare",
				'fr-fr': "Cauchemar",
				'de-de': "Nightmare"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],

			name: {
				'en-us': "Dream Eater",
				'fr-fr': "Dévorêve",
				'de-de': "Dream Eater"
			},

			effect: {
				'en-us': "If the Defending Pokémon isn't Asleep, this attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur n'est pas Endormi, cette attaque ne fait rien.",
				'de-de': "If the Defending Pokémon isn't Asleep, this attack does nothing."
			},

			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
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
				tcgplayer: 86024,
				cardmarket: 274955
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86024,
				cardmarket: 274955
			},
		},
	],
}

export default card
