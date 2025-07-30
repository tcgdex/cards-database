import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Energy Removal 2",
		fr: "Suppression d'Énergie 2",
		de: "Energy Removal 2*"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez 1 carte Énergie attachée à 1 des Pokémon de votre adversaire et défaussez-la.",
		de: "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it."
	},

	thirdParty: {
		cardmarket: 276728,
		tcgplayer: 85223
	}
}

export default card
