import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cry for Help",
		},

		cost: ["Grass"],

		effect: {
			en: "Put 1 random [Grass] Pokémon from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
