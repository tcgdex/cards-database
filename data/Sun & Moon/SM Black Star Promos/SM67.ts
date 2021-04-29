import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Celesteela-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		797,
	],
	hp: 200,
	types: [
		"Metal",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Fall",
			},
			effect: {
				en: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Press",
			},

			damage: 130,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blaster-GX",
			},
			effect: {
				en: "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) (You can't use more than 1 GX attack in a game.)",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
