import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Nidoqueen",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nidorina",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolution Helper",
			},
			effect: {
				en: "Once during your turn (before you attack) if Nidoqueen is on your bench, you may search your deck for a card that evolves from your Active Pokémon and attach it to your Active Pokémon. (this counts as evolving that Pokémon) Shuffle your deck afterward.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Claw",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
			},
			damage: 30,

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
