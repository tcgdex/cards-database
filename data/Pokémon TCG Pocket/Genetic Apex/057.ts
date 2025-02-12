import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Psyduck"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Headache"
		},

		effect: {
			en: "Your opponent can't use any Supporter cards from their hand during their next turn."
		},

		damage: "10"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
