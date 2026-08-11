import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fantina"
	},

	illustrator: "hncl",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Take a {P} Energy from your Energy Zone and attach it to each of your Drifblim and Mismagius."
	},

	trainerType: "Supporter",

	boosters: ["mega-altaria"]
}

export default card