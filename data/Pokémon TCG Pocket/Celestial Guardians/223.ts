import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Machop"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "Its whole body is composed of muscles. Even though it's the size of a human child, it can hurl 100 grown-ups."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Knuckle Punch"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card