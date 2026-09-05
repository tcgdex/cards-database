import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Cheerleader's Cheer",
		fr: "Encouragements hystériques",
		de: "Cheerleader-Jubel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 3 cartes. Votre adversaire peut piocher une carte.",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Your opponent may draw a card.",
		de: "Du kannst in jedem Zug nur eine Unterstützerkarte spielen. Wenn du diese Karte ausspielst, lege sie neben dein Aktives Pokémon. Lege diese Karte am Ende deines Zuges auf deinen Ablagestapel. Ziehe 3 Karten. Dein Gegner kann 1 Karte ziehen."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279227,
				tcgplayer: 84246
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279227,
				tcgplayer: 84246
			}
		},
	],
}

export default card
