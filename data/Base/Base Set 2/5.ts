import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Clefable",
	},
	illustrator: "Mitsuhiro Arita",
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


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metronome",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type the Defending Pokémon is, Clefable's type is still Colorless.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Minimize",
			},
			effect: {
				en: "All damage done by attacks to Clefable during your opponent's next turn is reduce by 20 (after applying Weakness and Resistance).",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
