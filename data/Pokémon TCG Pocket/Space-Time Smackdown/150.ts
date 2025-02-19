import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Cyrus"
	},

	illustrator: "akagi",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "Switch in 1 of your opponent's Benched Pokémon that has damage on it to the Active Spot."
	},

	trainerType: "Supporter",
		
	boosters: [Palkia]
}

export default card