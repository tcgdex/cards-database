import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Research Record",
		fr: "Archive des recherches",
		de: "Forschungsdaten"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 4 cartes du dessus de votre deck et replacez celles que vous voulez sur le dessus de votre deck dans n'importe quel ordre. Ensuite, placez les cartes restantes au-dessous de votre deck dans n'importe quel ordre.",
		de: "Schau dir die obersten 4 Karten deines Decks an und lege beliebig viele davon in beliebiger Reihenfolge auf dein Deck. Lege dann die restlichen Karten in beliebiger Reihenfolge unter dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 279727
	}
}

export default card
