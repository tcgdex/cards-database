import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Cynthia's Guidance",
		'fr-fr': "Les conseils de Cynthia",
		'de-de': "Cynthias Hilfe"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the top 7 cards of your deck, choose 1 of them, and put it into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
		'fr-fr': "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		'de-de': "Schau dir die obersten 7 Karten deines Decks an, wähle 1 davon und nimm sie auf deine Hand. Lege die anderen Karten zurück auf dein Deck. Mische dein Deck danach."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84556,
				cardmarket: 278827
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278827,
				tcgplayer: 84556
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				cardmarket: 449368,
				tcgplayer: 123193
			}
		},
	],

}

export default card
