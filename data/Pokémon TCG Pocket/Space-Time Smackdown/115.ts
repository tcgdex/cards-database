import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Wormadam"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Burmy"
	},

	description: {
		en: "Its appearance changes depending on where it evolved. The materials on hand become a part of its body."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Iron Head"
		},

		damage: "50+",
		cost: ["Metal", "Metal"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
