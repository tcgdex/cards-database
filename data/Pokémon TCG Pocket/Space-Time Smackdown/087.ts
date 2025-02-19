import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Regirock"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		en: "Every bit of Regirock's body is made of stone. As parts of its body erode, this Pokémon sticks rocks to itself to repair what's been lost."
	},

	stage: "Basic",

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
			en: "Boulder Crush"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card
