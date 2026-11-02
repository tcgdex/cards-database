import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Meltan",
		fr: "Meltan"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [808],
	hp: 70,
	types: ["Metal"],

	description: {
		en: "It dissolves and eats metal. Circulating liquid\nmetal within its body is how it generates energy.",
		fr: "Il se nourrit du métal qu'il fait fondre, et produit de l'énergie en faisant circuler du métal liquide dans son corps."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beam",
			fr: "Rayon"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card