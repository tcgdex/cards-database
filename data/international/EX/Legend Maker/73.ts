import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Fieldworker",
		fr: "Travailleur de terrain",
		de: "Feldarbeiter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Your opponent may also draw a card.",
		fr: "Piochez 3 cartes. Votre adversaire peut également piocher une carte.",
		de: "Ziehe 3 Karten. Dein Gegner kann dann ebenfalls 1 Karte ziehen.",
	},

	thirdParty: {
		cardmarket: 276950,
		tcgplayer: 85431
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		},
	]
}

export default card
