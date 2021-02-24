import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Suicune",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Crystal Body",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, other than damage, done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Aurora Wave",
			},
			effect: {
				en: "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If only 1 is heads, the Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
