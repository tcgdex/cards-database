import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Buck's Training",
		fr: "L'entrainement de Cornil",
		de: "Avenaros Training"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Ziehe 2 Karten. Solange Avenaros Training neben deinem Aktiven Pokémon den Aktiven Pokémon liegt, fügen alle Angriffe deiner Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278279
	}
}

export default card
