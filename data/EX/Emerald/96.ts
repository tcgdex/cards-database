import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Milotic ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mystic Scale",
			},
			effect: {
				en: "As long as Milotic ex is in play, each player can't play any Technical Machine cards from his or her hand. Discard all Technical Machine cards in play (both yours and your opponent's).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Gentle Wrap",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
			},
			effect: {
				en: "Move 1 basic Energy card attached to Milotic ex to 1 of your Benched Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
