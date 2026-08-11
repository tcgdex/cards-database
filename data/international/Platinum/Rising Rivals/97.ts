import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Underground Expedition",
		'fr-fr': "Expédition souterraine",
		'de-de': "Expedition ins Unterirdische"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the 4 cards from the bottom of your deck. Choose any 2 cards there and put them into your hand. Put the remaining cards back on the bottom of your deck in any order.",
		'fr-fr': "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		'de-de': "Schau dir die untersten 4 Karten deines Decks an. Wähle 2 Karten, die du dort gefunden hast, und nimm sie auf die Hand. Lege die restlichen Karten in beliebiger Reihenfolge unter dein Deck zurück."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278671,
				tcgplayer: 90156
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278671,
				tcgplayer: 90156
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 278671,
				tcgplayer: 178009
			}
		}
	],

}

export default card
