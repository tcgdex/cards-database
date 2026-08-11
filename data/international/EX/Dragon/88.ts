import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "TV Reporter",
		'fr-fr': "Journaliste télé",
		'de-de': "TV Reporter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 3 cards. Then discard any 1 card from your hand.",
		'fr-fr': "Piochez trois cartes. Ensuite, défaussez une carte de votre main.",
		'de-de': "Draw 3 cards. Then discard any 1 card from your hand.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90083,
				cardmarket: 275965
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90083,
				cardmarket: 275965
			},
		},
	],

}

export default card
