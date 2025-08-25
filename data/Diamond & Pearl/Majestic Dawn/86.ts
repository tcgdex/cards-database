import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
		de: "Flottball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retournez des cartes de votre deck jusqu'à ce que vous retourniez un Pokémon. Montrez-le à votre adversaire et placez-le dans votre main. Mélangez les autres cartes à votre deck. (Si vous ne retournez pas de Pokémon, mélangez toutes les cartes retournées à votre deck.)",
		de: "Decke solange Karten von deinem Deck auf, bis du eine Pokémon-Karte aufdeckst. Zeige die Pokémon-Karte deinem Gegner und nimm sie auf die Hand. Mische die übrigen aufgedeckten Karten zurück in dein Deck. (Falls du kein Pokémon-Karten aufgedeckt hast, mische alle aufgedeckten Karten zurück in dein Deck.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278135,
		tcgplayer: 88479
	}
}

export default card
