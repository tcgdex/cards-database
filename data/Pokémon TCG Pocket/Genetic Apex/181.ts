import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Meltan"
	},

	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Amass"
		},

		effect: {
			en: "Take 1 M Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
