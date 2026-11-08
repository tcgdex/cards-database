import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Mission",
		'de-de': "Rocket's Mission*"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard a card from your hand. Then, draw 3 cards. If you discarded a Pokémon that has Dark or Rocket's in its name, draw 4 cards instead.",
		'de-de': "Discard a card from your hand. Then, draw 3 cards. If you dicard a Pokémon that has Dark or Rocket's in its name, draw 4 cards instead."
	},


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276380,
				tcgplayer: 88780
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276380,
				tcgplayer: 88780
			},
		},
	],

}

export default card

