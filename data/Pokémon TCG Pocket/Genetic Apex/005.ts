import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Caterpie"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Find a Friend"
		},

		effect: {
			en: "Put 1 random G Pokémon from your deck into your hand."
		}
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Pikachu]
}

export default card
