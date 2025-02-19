import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Dawn"
	},

	illustrator: "saino misaki",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "Move an Energy from 1 of your Benched Pokémon to your Active Pokémon."
	},

	trainerType: "Supporter",
	
	boosters: [Dialga]
}

export default card