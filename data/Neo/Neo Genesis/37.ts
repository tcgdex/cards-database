import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		210,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Snubbull",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Charge",
				fr: "Charge furieuse"
			},
			effect: {
				en: "This attack does 10 damage plus 10 damage for each damage counter on Granbull. Then, Granbull does 20 damage to itself.",
				fr: "Cette attaque inflige 10 dégâts plus 10 dégâts pour chaque marqueur de dégâts sur Granbull. Ensuite, Granbull s'inflige 20 dégâts."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Il est timide et effarouché. Si on l'attaque, it flails about parer son attaquant."
	}
}

export default card
