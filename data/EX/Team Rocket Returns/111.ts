import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Here Comes Team Rocket!",
		de: "Hier kommt Team Rocket!"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Each player plays with his or her Prize cards face up for the rest of the game.",
		de: "Each player plays with his or her Prize cards face up for the rest of the game."
	},

	thirdParty: {
		cardmarket: 276403,
		tcgplayer: 86075
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
