import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté"
			},
			effect: {
				en: "Does 50 damage minus 10 for each damage counter on Machoke.",
				fr: "Inflige 50 dégâts moins 10 dégâts pour chaque marqueur de dégâts sur Machopeur."
			},
			damage: "50-",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Submission",
				fr: "Sacrifice"
			},
			effect: {
				en: "Machoke does 20 damage to itself.",
				fr: "Machopeur s'inflige 20 dégâts."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Son corps est si puissant qu'il lui faut une ceinture de force pour équilibrer ses mouvements."
	}
}

export default card
