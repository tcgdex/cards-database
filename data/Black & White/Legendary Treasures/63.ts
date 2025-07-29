import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Toxicroak",
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Croagunk",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Revenge",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 70 more damage.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281214
	}
}

export default card
