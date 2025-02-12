import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Pinsir"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Double Horn"
		},

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads."
		},

		damage: "50x"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
