import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Machoke"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machop"
	},

	description: {
		en: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Pummel"
		},

		damage: 30,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card