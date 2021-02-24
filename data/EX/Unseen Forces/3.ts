import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Bellossom",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		182,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Green Dance",
			},
			effect: {
				en: "Search your deck for up to 2 Grass Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward. If you put any Grass Pokémon into your hand, you may switch Bellossom with 1 of your Benched Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Bloom",
			},
			effect: {
				en: "If you have at least 3 Bellossom in play, this attack does 50 damage plus 50 more damage.",
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
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
