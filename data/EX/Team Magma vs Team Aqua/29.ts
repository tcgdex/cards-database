import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Manectric",
	},
	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Aqua Beam",
			},
			effect: {
				en: "If the Defending Pokémon has Team Magma's in its name, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chaos Crush",
			},
			effect: {
				en: "If the Defending Pokémon is Confused, discard an Energy card attached to the Defending Pokémon.",
			},
			damage: 50,

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
