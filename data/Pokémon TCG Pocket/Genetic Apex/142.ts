import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Mankey"
	},


	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Fight Back"
		},

		effect: {
			en: "If this Pokémon has damage on it, this attack does 60 more damage."
		},

		damage: "40+"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
