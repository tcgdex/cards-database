import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Here Comes Team Rocket!",
		'de-de': "Hier kommt Team Rocket!"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Each player plays with his or her Prize cards face up for the rest of the game.",
		'de-de': "Each player plays with his or her Prize cards face up for the rest of the game."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276403,
				tcgplayer: 86075
			},
		},
	],

}

export default card
