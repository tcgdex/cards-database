import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Forretress",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiky Shell",
			},
			effect: {
				en: "Put 3 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pop",
			},
			effect: {
				en: "Put 7 damage counters on Forretress. Move all Energy cards attached to Forretress to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
