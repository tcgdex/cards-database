import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Minun",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		312,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Chain of Events",
			},
			effect: {
				en: "As long as Minun is your Active Pokémon, whenever your other Active Pokémon, if any, attacks, you may use Cheer On after the first attack (you still need the necessary Energy to use Cheer On). You can't use Cheer On more than once in this way even if your other Active Pokémon has the Chain of Events Poké-Body.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer On",
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon (including Minun).",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Special Circuit",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If you choose Pokémon that has a Poké-Power or Poké-Body, this attack does 40 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
