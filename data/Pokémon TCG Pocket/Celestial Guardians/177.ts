import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Pikipek"
	},

	illustrator: "Narumi Sato",
	rarity: "One Star",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "It pecks at trees with its hard beak. You can get some idea of its mood or condition from the rhythm of its pecking."
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