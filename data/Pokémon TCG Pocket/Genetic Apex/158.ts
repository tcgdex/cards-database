import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kabuto"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Dome Fossil"
	},


	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Shell Attack"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.",
	}
}

export default card
