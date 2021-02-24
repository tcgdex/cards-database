import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Breloom",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Shroomish",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leaf Poison",
			},
			effect: {
				en: "If Breloom has any Grass Energy attached to it, the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hustle Punch",
			},
			effect: {
				en: "During your next turn, Hustle Punch attack's base damage is 50 instead of 70.",
			},
			damage: 70,

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
