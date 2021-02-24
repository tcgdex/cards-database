import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Golduck δ",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Psyduck",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Block",
			},
			effect: {
				en: "As long as any Stadium card with Holon in its name is in play, your opponent can't play any Stadium cards from his or her hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mind Play",
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose. If that card is a Trainer card, this attack does 30 damage plus 30 more damage, and discard that card. If that card is not a Trainer card, return it to your opponent's hand.",
			},
			damage: 30,

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
