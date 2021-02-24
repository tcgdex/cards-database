import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Vaporeon",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aqua Supply",
			},
			effect: {
				en: "You may attach a basic Energy card from your hand to 1 of your Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Multi Bubble",
			},
			effect: {
				en: "If Vaporeon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Asleep.",
			},
			damage: 40,

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
