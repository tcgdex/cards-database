import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play this card only if you discard another card from your hand.\n\nSearch your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Vous ne pouvez jouer cette carte que si vous défaussez une autre carte de votre main.\n\nCherchez dans votre deck un Pokémon de base, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
