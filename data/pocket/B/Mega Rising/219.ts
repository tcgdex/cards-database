import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heavy Helmet"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "If the Pokémon this card is attached to has a Retreat Cost of 3 or more, it takes −20 damage from attacks from your opponent's Pokémon."
	},

	trainerType: "Tool",

	boosters: ["mega-gyarados"]
}

export default card