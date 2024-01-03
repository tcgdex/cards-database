import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "PokéNav",
		fr: "PokéNav",
		de: "PokéNav"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Regardez les trois cartes placées au-dessus de votre deck et choisissez un Pokémon de base, une carte Évolution ou une carte Énergie. Montrez-la à votre adversaire et placez-la dans votre main. Remettez les deux autres cartes dans votre deck dans n'importe quel ordre.",
		de: "Look at the top 3 cards of your deck, and choose a basic Pokémon, Evolution card, or Energy card. Show it to your opponent and put it into your hand. Put the 2 other cards back on top of your deck in any other."
	}
}

export default card
