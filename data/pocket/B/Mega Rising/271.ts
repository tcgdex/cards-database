import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lisia"
	},

	illustrator: "Cona Nitanda",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "Put 2 random Basic Pokémon with 50 HP or less from your deck into your hand."
	},

	trainerType: "Supporter",
	boosters: ["mega-altaria"]
}

export default card