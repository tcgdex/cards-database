import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Clefable",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		36,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Clefairy",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Moonlight",
			},
			effect: {
				en: "Once during your turn (before you attack), you may put a card from your hand back on your deck. If you do so, search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Clefable is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doubleslap",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

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
