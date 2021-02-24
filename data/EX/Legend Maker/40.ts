import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Misdreavus",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		200,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Deep Sleep",
			},
			effect: {
				en: "As long as Misdreavus is your Active Pokémon, each player flips 2 coins for his or her Pokémon that is Asleep between turns. If either coin is tails, that Pokémon is still Asleep.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return Trance",
			},
			effect: {
				en: "Return an Energy card attached to Misdreavus to your hand. The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dream Eater",
			},
			effect: {
				en: "If the Defending Pokémon is not Asleep, this attack does nothing.",
			},
			damage: 30,

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
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
