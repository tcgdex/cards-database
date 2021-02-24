import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Delcatty ex",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Constrain",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Upstream",
			},
			effect: {
				en: "Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
