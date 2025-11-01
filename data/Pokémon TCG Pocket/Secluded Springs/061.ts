import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Ursaring",
		fr: "Ursaring"
	},

	illustrator: "Uta",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
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
			en: "Claw Slash",
			fr: "Tranch'Griffe"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card