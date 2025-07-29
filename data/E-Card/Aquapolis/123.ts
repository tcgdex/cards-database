import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Forest Guardian",
		fr: "Gardien de la forêt",
		de: "Waldwächter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nMélangez votre deck. Regardez ensuite les 7 cartes du dessus de votre deck. Choisissez une de ces cartes et ajoutez-la à votre main. Mélangez ensuite le reste à votre deck.",
		de: "Mische dein Deck. Schaue dir dann die 7 obersten Karten deines Decks an. Wähle 1 dieser Karten und nimm sie auf deine Hand. Mische danach die anderen Karten in dein Deck."
	},

	thirdParty: {
		cardmarket: 275199
	}
}

export default card
