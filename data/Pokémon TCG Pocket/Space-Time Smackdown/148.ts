import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Rocky Helmet"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "If the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
	},

	trainerType: "Tool",
		
	boosters: [Palkia]
}

export default card