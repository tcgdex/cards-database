import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott",
		fr: "Farfaduvet"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It scatters cotton all over the place as a prank. If it gets wet, it'll become too heavy to move and have no choice but to answer for its mischief.",
		fr: "Il joue de mauvais tours en répendant son coton. Si on le mouille. Il s'alourdit et ne peut plus bouger, ce qui l'oblige à s'avouer vaincu."
	}
}

export default card
