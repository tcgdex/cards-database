import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Swanna",
	},
	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Ducklett",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sky Circus",
			},
			effect: {
				en: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon’s attack costs.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feather Slice",
			},
			effect: {
				en: "You may discard a card from your hand. If you do, this attack does 70 more damage.",
			},
			damage: "70+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
