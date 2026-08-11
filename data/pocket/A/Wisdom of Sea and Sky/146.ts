import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [217],
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Teddiursa"
	},

	description: {
		'en-us': "It usually wears a hardened expression, but when\nit's licking up honey—which it loves—the joy it\nfeels will cause it to break into a wide grin.",
		'fr-fr': "Son visage austère s'illumine de joie lorsqu'il savoure du miel, un aliment qu'il adore."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Swing Around",
			'fr-fr': "Balançoire"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card