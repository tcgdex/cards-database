import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Bill's Maintenance",
		'fr-fr': "Entretien de Leo",
		'de-de': "Bills Wartung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. If you have any cards in your hand, shuffle 1 of them into your deck, then draw 3 cards.",
		'fr-fr': "Si vous avez des cartes en main, mélangez-en 1 à votre deck puis piochez 3 cartes.",
		'de-de': "Wenn du mindestens 1 Karte auf der Hand hast, mische 1 von ihnen in dein Deck und ziehe dann 3 Karten.",
	},

	thirdParty: {
		cardmarket: 277152,
		tcgplayer: 83839
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
