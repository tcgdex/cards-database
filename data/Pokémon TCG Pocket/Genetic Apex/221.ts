import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Blaine"
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		en: "During this turn, attacks used by your Ninetales, Rapidash or Magmar do +30 damage to your opponent's Active Pokémon"
	},

	trainerType: "Supporter",
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
