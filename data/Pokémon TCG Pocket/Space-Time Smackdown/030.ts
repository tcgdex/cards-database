import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

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
		en: "If the convection microwave oven is not working properly, then the Rotom inhabiting it will become lethargic."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Heat Breath"
		},

		damage: "30+",
		cost: ["Fire", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card
