import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Entei",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Bolt",
			},
			effect: {
				en: "Whenever your opponent's attack damages Entei, unless that attack Knocks Out Entei, flip a coin. If heads, shuffle Entei and all cards attached to it into your deck. This power can't be used if Entei is already Asleep, Confused, or Paralyzed when it is damaged.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Protective Flame",
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to your Benched Pokémon.",
			},
			damage: 50,

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
