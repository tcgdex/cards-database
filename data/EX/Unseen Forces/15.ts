import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Sudowoodo",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Copy",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Sudowoodo performs that attack.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
			},
			effect: {
				en: "Does 50 damage minus 10 damage for each damage counter on Sudowoodo.",
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
