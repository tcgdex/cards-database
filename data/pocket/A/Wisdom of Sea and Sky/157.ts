import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lyra",
		'fr-fr': "Célesta"
	},

	illustrator: "yuu",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Switch your Active Pokémon that has damage on it with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif ayant subi des dégâts contre un de vos Pokémon de Banc."
	},

	trainerType: "Supporter",
	boosters: ["lugia"]
}

export default card