import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Smeargle δ",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		235,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
			},
			effect: {
				en: "Draw a card.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flickering Tail",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 10 damage plus 10 more damage and the Defending Pokémon is now Asleep.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
