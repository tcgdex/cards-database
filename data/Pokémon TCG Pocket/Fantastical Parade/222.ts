import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Phanpy"
	},

	illustrator: "kurumitsu",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "This Pokémon lives and nests on a riverbank.\nAfter playing in the mud, it won't be able to\nsettle down unless it washes its body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Reckless Charge"
		},

		damage: 30,
		cost: ["Fighting"],

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card