import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Mary's Request",
		fr: "La requête de Lula",
		de: "Magits Anfrage"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nPiochez une carte. Si vous n'avez pas de Pokémon Évolués de niveau 2 en jeu, piochez 2 cartes supplémentaires.",
		de: "Draw a card. If you don't have any Stage 2 Evolved Pokémon in play, draw 2 more cards."
	},

	thirdParty: {
		cardmarket: 276732,
		tcgplayer: 87243
	}
}

export default card
