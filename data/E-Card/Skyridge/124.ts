import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Fast Ball",
		de: "Schneller Ball"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Reveal cards from your deck until you reveal an Evolution card. Show that card to your opponent and put it into your hand. Shuffle the other revealed cards into your deck. (If you don't reveal an Evolution card, shuffle all the revealed cards back into your deck.)",
		de: "Decke Karten aus deinem deck auf, bis du eine Entwicklungskarte aufdeckst. Zeige diese Karte deinem Gegner und nimm sie auf deine Hand. Mische die anderen aufgedeckten Karten in dein Deck. (Ist unter den aufgedeckten Karten keine Entwicklungskarte, mische alle aufgedeckten karten zurück in dein Deck.)"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85391,
				cardmarket: 275382
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85391,
				cardmarket: 275382
			},
		},
	],
}

export default card
