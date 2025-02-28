import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Cherubi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It nimbly dashes about to avoid getting pecked<br />by bird Pokémon that would love to make off<br />with its small, nutrient-rich storage ball."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leafage"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card