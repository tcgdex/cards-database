import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Taillow"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It dislikes cold seasons. They migrate to other\nlands in search of warmth, flying over 180 miles\na day."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card