import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Swanna"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Ducklett"
	},


	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wing Attack"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.",
	}
}

export default card
