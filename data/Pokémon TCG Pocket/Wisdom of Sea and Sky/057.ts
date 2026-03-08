import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Delibird",
		fr: "Cadoizo"
	},

	illustrator: "Narumi Sato",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [225],
	hp: 70,
	types: ["Water"],

	description: {
		en: "It carries food all day long. There are tales about\nlost people who were saved by the food it had.",
		fr: "Il transporte de la nourriture toute la journée. Ses réserves de vivres auraient sauvé la vie de nombreuses personnes en péril."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stumbling Draw",
			fr: "Glissé-Pioché"
		},

		damage: 10,
		cost: ["Water"],

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card