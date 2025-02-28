import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Combee"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "At night, Combee sleep in a group of about a<br />hundred, packed closely together in a lump."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bug Bite"
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