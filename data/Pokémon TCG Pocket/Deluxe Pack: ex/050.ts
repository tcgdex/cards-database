import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito"
	},

	illustrator: "mashu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Its fluffy fur is similar in composition to plants.\nThis Pokémon frequently washes its face to keep\nit from drying out."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cry for Help"
		},

		cost: ["Grass"],

		effect: {
			en: "Put 1 random {G} Pokémon from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card