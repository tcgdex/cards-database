import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Butterfree"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Metapod"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Powder Heal"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Gust"
		},

		damage: "60"
	}],

	retreat: 1,
	rarity: "Three Diamond",
	boosters: [Pikachu]
}

export default card
