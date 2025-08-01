import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Mary's Impulse",
		fr: "Impulsion de Lula",
		de: "Mary's Impulse*"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nLancez une pièce jusqu'à obtenir pile. Pour chaque face, piochez 2 cartes.",
		de: "Flip a coin until you get tails. For each heads, draw 2 cards."
	},

	thirdParty: {
		cardmarket: 275017
	}
}

export default card
