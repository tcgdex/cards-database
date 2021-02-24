import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		674,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bad-Influence Evolution",
				fr: "Évolution Influençable",
			},
			effect: {
				en: "If you have any Darkness Pokémon on your Bench, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				fr: "Si vous avez un Pokémon Darkness sur votre Banc, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confront",
				fr: "Confrontation",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
