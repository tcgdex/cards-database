import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Magcargo",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Slugma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Streaming Mantle",
			},
			effect: {
				en: "When you play Magcargo from your hand to evolve your Active Pokémon, you may discard the top 3 cards of your deck and then shuffle 3 basic energy cards from your discard pile into your deck. If you do, your opponent must do the same.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Lava",
			},
			effect: {
				en: "You may discard a or basic Energy card attached to Magcargo. If you discard a Energy card in this way, the Defending Pokémon is now Burned. If you discard a Energy card in this way, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
