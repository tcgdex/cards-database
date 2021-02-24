import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Mew ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 90,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Versatile",
			},
			effect: {
				en: "Mew ex can use the attacks of all Pokémon in play as its own. (You still need the necessary Energy to use each attack.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Power Move",
			},
			effect: {
				en: "Search your deck for an Energy card and attach it to Mew ex. Shuffle your deck afterward. Then, you may switch Mew ex with 1 of your Benched Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
