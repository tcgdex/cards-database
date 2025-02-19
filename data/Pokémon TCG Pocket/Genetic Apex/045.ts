import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Eevee"
	},


	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flamethrower"
		},

		effect: {
			en: "Discard 1 R Energy from this Pokémon."
		},

		damage: "110"
	}],

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
