import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Kartana",
		fr: "Katagami"
	},

	illustrator: "nagimiso",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "This Ultra Beast's body, which is as thin\nas paper, is like a sharpened sword.",
		fr: "Le corps de cette Ultra-Chimère semble fin comme du papier, mais il est aussi tranchant qu'un sabre affûté."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thrash Metal",
			fr: "Trash Metal"
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