import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Phanpy"
	},

	illustrator: "Asako Ito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "This Pokémon lives and nests on a riverbank.<br />After playing in the mud, it won't be able to<br />settle down unless it washes its body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card