import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Growlithe"
	},


	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Tackle"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		},

		damage: "100"
	}],

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Pikachu]
}

export default card
