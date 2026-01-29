import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Cacnea"
	},

	illustrator: "Mina Nakai",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It lives in arid locations. Its yellow flowers bloom\nonce a year."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corkscrew Punch"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card