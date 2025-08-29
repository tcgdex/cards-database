import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Donphan"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy"
	},

	description: {
		en: "Donphan is covered in tough hide, so even being\nhit by a car won't faze this Pokémon. However, it\nis extremely susceptible to rain."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Exoskeleton"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks."
		}
	}],

	attacks: [{
		name: {
			en: "Land Crush"
		},

		damage: 80,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card