import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Seadra"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Horsea"
	},


	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Water Arrow"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon."
		}
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Pikachu]
}

export default card
