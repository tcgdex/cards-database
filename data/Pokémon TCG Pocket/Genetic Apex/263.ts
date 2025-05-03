import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",
	evolveFrom: {
		en: "Machoke"
	},
	suffix: "EX",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Mega Punch"
		},

		damage: "120"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Star"
}

export default card
