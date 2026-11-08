import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Beast Wall",
		'fr-fr': "Barrière Chimère"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if your opponent hasn't gotten any points.\n\nDuring your opponent's next turn, all of your Ultra Beasts take −20 damage from attacks from your opponent's Pokémon.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si votre adversaire n'a gagné aucun point.\n\nPendant le prochain tour de votre adversaire, toutes vos Ultra-Chimères subissent – 20 dégâts provenant des attaques des Pokémon de votre adversaire."
	},

	trainerType: "Item"
}

export default card
