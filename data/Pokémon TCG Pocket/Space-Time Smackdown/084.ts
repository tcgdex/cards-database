import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gliscor"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gligar"
	},

	description: {
		en: "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Acrobatics"
		},

		damage: "20+",
		cost: ["Fighting"],

		effect: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card
