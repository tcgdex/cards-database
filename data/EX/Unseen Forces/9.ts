import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Meganium",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		154,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bayleef",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Healing Aroma",
			},
			effect: {
				en: "As long as Meganium is your Active Pokémon, remove 1 damage counter from each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) between turns.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bouncy Move",
			},
			effect: {
				en: "You may put up to 5 damage counters on Meganium. If you do, this attack does 50 damage plus 10 more damage for each damage counter you put on Meganium in this way.",
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
