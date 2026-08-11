import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sightseer"
	},

	illustrator: "yuu",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 4 cards of your deck. Put all Stage 1 Pokémon you find there into your hand. Shuffle the other cards back into your deck."
	},

	trainerType: "Supporter"
}

export default card