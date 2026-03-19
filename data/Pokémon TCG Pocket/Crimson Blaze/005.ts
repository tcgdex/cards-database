import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Spinarak"
	},

	illustrator: "kodama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Although the poison from its fangs isn't that\nstrong, it's potent enough to weaken prey that\ngets caught in its web."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sting"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card