import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Kartana"
	},

	illustrator: "nagimiso",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "This Ultra Beast's body, which is as thin<br />as paper, is like a sharpened sword."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thrash Metal"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card