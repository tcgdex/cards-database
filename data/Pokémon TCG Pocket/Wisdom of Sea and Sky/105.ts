import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Binacle",
		fr: "Opermine"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "After two Binacle find a suitably sized rock, they\nadhere themselves to it and live together.\nThey cooperate to gather food during high tide.",
		fr: "Ils vivent par groupes de deux sur un rocher qui leur convient en bord de mer. À marée haute, le duo coopère pour capturer des proies."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dual Chop",
			fr: "Double Baffe"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card