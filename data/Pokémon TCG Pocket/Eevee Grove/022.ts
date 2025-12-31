import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Popplio",
		fr: "Otaquin"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day.",
		fr: "Grâce à son entraînement quotidien, les ballons qu'il gonfle avec son nez sont de plus en plus gros."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Watering",
			fr: "Arrosage"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card