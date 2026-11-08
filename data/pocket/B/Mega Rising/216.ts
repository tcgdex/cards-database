import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cover Fossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "One Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Play this card as if it were a 40-HP Basic {C} Pokémon.\nAt any time during your turn, you may discard this card from play.\nThis card can't retreat."
	},

	trainerType: "Item",

	boosters: ["mega-gyarados"]
}

export default card