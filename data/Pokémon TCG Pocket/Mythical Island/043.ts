import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Geodude"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "Geodude that have lived a long life have had all their edges smoothed out until they're totally round. They also have a calm, quiet disposition."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Light Punch"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
