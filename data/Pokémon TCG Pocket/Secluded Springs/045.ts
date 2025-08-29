import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Relicanth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		en: "Rock-hard scales and oil-filled swim bladders\nallow this Pokémon to survive the intense water\npressure of the deep sea."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Take Down"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

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