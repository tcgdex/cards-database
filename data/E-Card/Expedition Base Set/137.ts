import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Bill's Maintenance",
		fr: "Entretien de Léo",
		de: "Bills Wartung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. If you have any cards in your hand, shuffle 1 of them into your deck, then draw 3 cards.",
		fr: "Si vous avez des cartes dans votre main, mélangez-en une à votre deck et piochez ensuite 3 cartes.",
		de: "Falls du mindestens eine Karte auf deiner Hand hast, mische 1 davon in dein Deck und ziehe dann 3 Karten.",
	},

	thirdParty: {
		cardmarket: 275012,
		tcgplayer: 83837
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
