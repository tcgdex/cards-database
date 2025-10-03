import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Underground Expedition",
		fr: "Expédition souterraine",
		de: "Expedition ins Unterirdische"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Schau dir die untersten 4 Karten deines Decks an. Wähle 2 Karten, die du dort gefunden hast, und nimm sie auf die Hand. Lege die restlichen Karten in beliebiger Reihenfolge unter dein Deck zurück."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278671,
		tcgplayer: 90156
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league"
		}
	]
}

export default card
