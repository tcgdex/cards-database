import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Elemental Switch",
		'fr-fr': "Échange Élémentaire"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Move a {R}, {W}, or {L} Energy from 1 of your Benched Pokémon to your Active Pokémon.",
		'fr-fr': "Déplacez une Énergie {R}, {W} ou {L} d'un de vos Pokémon de Banc vers votre Pokémon Actif."
	},

	trainerType: "Item",
	boosters: ["lugia"]
}

export default card