import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Vileplume"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Gloom"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Soothing Scent"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep"
		},

		damage: "80"
	}],

	retreat: 3,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
