import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Baltoy",
		fr: "Balbuto"
	},

	illustrator: "Uta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It moves while spinning around on its single foot.\nSome Baltoy have been seen spinning on\ntheir heads.",
		fr: "Il se déplace en tournoyant sur son pied. On le voit parfois faire de même sur la tête."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card