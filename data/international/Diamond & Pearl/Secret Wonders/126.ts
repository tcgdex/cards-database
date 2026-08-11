import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Team Galactic's Mars",
		'fr-fr': "Mars de la Team Galaxie",
		'de-de': "Team Galaktiks Mars"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 2 cards. Then, choose a card from your opponent's hand without looking and put it on the bottom of his or her deck.",
		'fr-fr': "Piochez 2 cartes. Ensuite, choisissez sans regarder une carte de la main de votre adversaire et placez-la au dessous de son deck.",
		'de-de': "Ziehe 2 Karten. Danach wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie unter das Deck deines Gegners."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277879,
		tcgplayer: 89810
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
