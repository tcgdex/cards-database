import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Quick-Grow Extract"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Crown",
	category: "Trainer",

	effect: {
		'en-us': "Choose 1 of your {G} Pokémon in play. Put a random {G} Pokémon from your deck that evolves from that Pokémon onto that Pokémon to evolve it. You can't use this card during your first turn or on a Pokémon that was put into play this turn."
	},

	trainerType: "Item"
}

export default card