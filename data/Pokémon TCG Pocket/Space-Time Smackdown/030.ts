import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Heat Rotom"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		en: "If the convection microwave oven is not working<br />properly, then the Rotom inhabiting it will<br />become lethargic."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Heat Breath"
		},

		damage: 30,
		cost: ["Fire", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga, Palkia]
}

export default card