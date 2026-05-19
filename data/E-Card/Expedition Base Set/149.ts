import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Professor Oak's Research",
		fr: "Recherches du professeur Chen",
		de: "Professor Eichs Nachforschunge"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck, then draw 5 cards.",
		fr: "Mélangez votre main à votre deck. Piochez ensuite 5 cartes.",
		de: "Mische deine Hand in dein Deck, und ziehe dann 5 Karten.",
	},

	thirdParty: {
		cardmarket: 275024,
		tcgplayer: 88402
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	]
}

export default card
