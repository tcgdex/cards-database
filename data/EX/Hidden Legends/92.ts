import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Steven's Advice",
		fr: "Les conseils de Pierre",
		de: "Steven's Advice*"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nVous pouvez piocher autant de cartes que votre adversaire possède de Pokémon en jeu.\n\nSi vous avez 7 cartes ou plus dans votre main (celle-ci incluse), vous ne pouvez pas jouer cette carte.",
		de: "Draw a number of cards, up to the number of your opponent's Pokémon in play.\nIf you have more than 7 cards (including this one) in your hand, you can't play this card."
	},

	thirdParty: {
		cardmarket: 276166,
		tcgplayer: 89569
	}
}

export default card
