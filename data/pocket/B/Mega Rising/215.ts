import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hitting Hammer"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Flip 2 coins. If both of them are heads, discard a random Energy from your opponent's Active Pokémon."
	},

	trainerType: "Item",

	boosters: ["mega-gyarados"]
}

export default card