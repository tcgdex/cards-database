import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Ninetales"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Vulpix"
	},


	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Flamethrower"
		},

		effect: {
			en: "Discard 1 R Energy from this Pokémon."
		},

		damage: "90"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
