import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Wormadam"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Burmy"
	},

	description: {
		en: "Its appearance changes depending on where it evolved. The materials on hand become a part of its body."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Land Crush"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card
