import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Paras"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Scratch"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.",
	}
}

export default card
