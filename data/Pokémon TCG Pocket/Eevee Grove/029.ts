import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Woobat",
		fr: "Chovsourir"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "While inside a cave, if you look up and see lots\nof heart-shaped marks lining the walls, it's\nevidence that Woobat live there.",
		fr: "La présence de marques en forme de cœur sur les parois des grottes indique la présence de Chovsourir à l'intérieur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gust",
			fr: "Tornade"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card