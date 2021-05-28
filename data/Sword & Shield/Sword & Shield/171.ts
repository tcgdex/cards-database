import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Ordinary Rod",
		fr: "Canne Ordinaire",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 or both:\n\n• Shuffle up to 2 Pokémon from your discard pile into your deck.\n\n• Shuffle up to 2 basic Energy cards from your discard pile into your deck.",
		fr: "Choisissez l’une de ces options ou les deux :\n\n• Mélangez avec votre deck jusqu’à 2 Pokémon de votre pile de défausse.\n\n• Mélangez avec votre deck jusqu’à 2 cartes Énergie de base de votre pile de défausse."
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
