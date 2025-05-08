import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gogoat",
		fr: "Chevroum"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine"
	},

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
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
		fr: "Il peut ressentir les émotions de ses adversaires en les touchant avec ses cornes. Il aide les êtres humains dans leurs travaux depuis 5 000 ans."
	}
}

export default card
