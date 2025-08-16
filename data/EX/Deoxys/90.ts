import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Professor Cozmo's Discovery",
		fr: "La découverte du Professeur Kosmo",
		de: "Professor Kosmos Entdeckung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nLancez une pièce. Si c'est face, piochez les 3 dernières cartes de votre deck. Si c'est pile, piochez les 2 cartes du dessus de votre deck.",
		de: "Flip a coin. If heads, draw the bottom 3 cards of your deck. If tails, draw the top2 cards of your deck."
	},

	thirdParty: {
		tcgplayer: 88384,
		cardmarket: 276493
	}
}

export default card
