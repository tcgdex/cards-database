import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Magneton"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: {
		en: "Magnemite"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Volt Charge"
		},

		effect: {
			en: "Once during your turn, you may take a L Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Spinning Attack"
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Pikachu]
}

export default card
