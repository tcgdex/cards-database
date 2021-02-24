import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Magneton",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 60,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Magnetic Lines",
			},
			effect: {
				en: "If the Defending Pokémon has any basic Energy cards attached to it, choose 1 of them. If your opponent has any Benched Pokémon, choose 1 of them and attach that Energy card to it.",
			},
			damage: 30,

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
