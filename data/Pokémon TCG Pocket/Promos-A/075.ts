import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Kartana",
		es: "Kartana"
	},

	illustrator: "Hasuno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [798],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "This Ultra Beast's body, which is as thin\nas paper, is like a sharpened sword.",
		es: "El cuerpo de este Ultraente es fino como el papel\ny tan cortante como una espada recién afilada",
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thrash Metal",
			es: "Thrash Metal"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol9"]
}

export default card