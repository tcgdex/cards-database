import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [602],
	hp: 40,
	types: ["Lightning"],

	description: {
		'en-us': "While one alone doesn't have much power,\na chain of many Tynamo can be as powerful\nas lightning.",
		'fr-fr': "Tout seuls, ils ne dégagent pas beaucoup d'électricité, mais un banc d'Anchwatt produit la même puissance qu'un éclair."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tiny Bolt",
			'fr-fr': "Foudre Minuscule"
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