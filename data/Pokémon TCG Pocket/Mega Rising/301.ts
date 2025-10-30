import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Brionne"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Popplio"
	},

	description: {
		en: "It gets excited when it sees a dance it\ndoesn't know. This hard worker practices\ndiligently until it can learn that dance."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Water Gun"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card