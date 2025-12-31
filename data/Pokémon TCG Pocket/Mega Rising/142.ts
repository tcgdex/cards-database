import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Bewear"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Stufful"
	},

	description: {
		en: "The moves it uses to take down its prey would\nmake a martial artist jealous. It tucks subdued\nprey under its arms to carry them to its nest."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heavy Impact"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card