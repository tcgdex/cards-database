import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Cryogonal"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "Cryogonal appear during cold seasons. It is said\nthat people and Pokémon who die on snowy\nmountains are reborn into these Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ice Blade"
		},

		cost: ["Water", "Water"],

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card