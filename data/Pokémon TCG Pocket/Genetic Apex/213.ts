import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Minccino"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Do the Wave"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon."
		},

		damage: "30x"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
