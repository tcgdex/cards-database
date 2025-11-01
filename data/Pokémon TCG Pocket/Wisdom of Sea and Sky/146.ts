import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ursaring",
		fr: "Ursaring"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Teddiursa"
	},

	description: {
		en: "It usually wears a hardened expression, but when\nit's licking up honey—which it loves—the joy it\nfeels will cause it to break into a wide grin.",
		fr: "Son visage austère s'illumine de joie lorsqu'il savoure du miel, un aliment qu'il adore."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Swing Around",
			fr: "Balançoire"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face."
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