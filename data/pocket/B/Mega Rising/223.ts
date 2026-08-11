import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "May"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Put 2 random Pokémon from your deck into your hand. For each Pokémon you put into your hand in this way, choose a Pokémon to shuffle from your hand into your deck."
	},

	trainerType: "Supporter",

	boosters: ["mega-blaziken"]
}

export default card