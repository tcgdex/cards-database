import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sitrus Berry"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "At the end of each turn, if the Pokémon this card is attached to has half of its maximum HP or less remaining, heal 30 damage from it. If you do, discard this card."
	},

	trainerType: "Tool",

	boosters: ["mega-altaria"]
}

export default card