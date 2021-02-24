import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Togepi",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		175,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Snivel",
			},
			effect: {
				en: "If the Defending Pokémon attacks Togepi during your opponent's next turn, any damage done to Togepi is reduced by 20 (before applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mini-Metronome",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type the Defending Pokémon is, Togepi's type is still .) Togepi performs that attack.",
			},

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
