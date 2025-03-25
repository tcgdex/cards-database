import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ponyta",
		fr: "Ponyta"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It can't run properly when it's newly born. As it races around with others of its kind, its legs grow stronger.",
		fr: "A la naissance, il ne court pas très vite. C'est en faisant la course avec ses camarades qu'il se muscle les jambes."
	}
}

export default card
