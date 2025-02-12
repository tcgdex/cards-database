import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Dome Fossil"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		en: "Play this card as if it were a 40-HP Basic C Pokémon.\nAt any time during your turn, you may discard this card from play.\nThis card can't retreat."
	},

	trainerType: "Item",
	rarity: "One Diamond",
	boosters: [Charizard]
}

export default card
