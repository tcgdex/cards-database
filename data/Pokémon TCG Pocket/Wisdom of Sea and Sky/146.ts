import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ursaring"
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
		en: "It usually wears a hardened expression, but when\nit's licking up honey—which it loves—the joy it\nfeels will cause it to break into a wide grin."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Swing Around"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card