import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Dark Dragonite",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Dragonair",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Summon Minions",
			},
			effect: {
				en: "When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Tail",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
