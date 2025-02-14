import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Giant Cape"
	},

	illustrator: "Ryo Ueda",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "The Pokémon this card is attached to gets +20 HP."
	},

	trainerType: "Tool",
	
	boosters: [Dialga]
}

export default card