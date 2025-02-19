import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Pokémon Communication"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "Choose a Pokémon in your hand and switch it with a random Pokémon in your deck."
	},

	trainerType: "Item",
	
	boosters: [Dialga]
}

export default card