import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",
	evolveFrom: {
		en: "Charmeleon"
	},


	attacks: [{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Spin"
		},

		effect: {
			en: "Discard 2 R Energy from this Pokémon."
		},

		damage: "150"
	}],

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
