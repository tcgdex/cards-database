import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Gengar",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Manipulate",
			},
			effect: {
				en: "When you play Gengar from your hand to evolve your Active Pokémon, you may put a Basic Pokémon (excluding Baby Pokémon) from your discard pile onto your bench. Then flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to that Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydrokinesis",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned. If tails, the Defending Pokémon is now Confused.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
