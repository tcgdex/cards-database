import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Tynamo",
		fr: "Anchwatt"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		en: "While one alone doesn't have much power,\na chain of many Tynamo can be as powerful\nas lightning.",
		fr: "Tout seuls, ils ne dégagent pas beaucoup d'électricité, mais un banc d'Anchwatt produit la même puissance qu'un éclair."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tiny Bolt",
			fr: "Foudre Minuscule"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card