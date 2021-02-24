import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Cradily δ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		346,
	],
	hp: 100,
	types: [
		"Darkness",
		"Metal",
	],
	evolveFrom: {
		en: "Lileep",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Harsh Fluid",
			},
			effect: {
				en: "Put 5 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Tentacles",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
