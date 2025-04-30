import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Machoke"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machop"
	},

	description: {
		en: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Strength"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card