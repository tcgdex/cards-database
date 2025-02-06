import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gogoat"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Skiddo"
	},


	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It can sense the feelings of others by touching them with its horns. This species has assisted people with their work since 5,000 years ago.",
	}
}

export default card
