import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Poochyena",
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		261,
	],
	hp: 40,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Snarl",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to the Defending Pokémon. If tails, the Defending Pokémon is now Paralyzed.",
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
