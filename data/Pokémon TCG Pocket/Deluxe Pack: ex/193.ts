import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machoke"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Mega Punch"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3
}

export default card