import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Traveling Salesman",
		fr: "Entretien de Léo",
		de: "Bills Wartung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 2 Technical Machine and/or Pokémon Tool cards, show them to your opponent, and then put them into your hand. Shuffle your deck afterward.",
		fr: "Si vous avez des cartes dans votre main, mélangez-en une à votre deck et piochez ensuite 3 cartes.",
		de: "Falls du mindestens eine Karte auf deiner Hand hast, mische 1 davon in dein Deck und ziehe dann 3 Karten.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83837,
				cardmarket: 275012
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
