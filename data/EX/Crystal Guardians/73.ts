import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Celio's Network",
		fr: "Le réseau de Cileo",
		de: "Celios Netzwerk"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck un Pokémon de base ou une carte Évolution (Pokémon-ex exclus). Montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einer Basis-Pokémon-Karte oder einer Evolutionskarte (kein Pokémon-ex), zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277154
	}
}

export default card
