import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Swoobat"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Woobat"
	},


	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Heart Stamp"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Emitting powerful sound waves tires it out. Afterward, it won't be able to fly for a little while.",
	}
}

export default card
