import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Mission",
		de: "Rocket's Mission*"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard a card from your hand. Then, draw 3 cards. If you discarded a Pokémon that has Dark or Rocket's in its name, draw 4 cards instead.",
		de: "Discard a card from your hand. Then, draw 3 cards. If you dicard a Pokémon that has Dark or Rocket's in its name, draw 4 cards instead."
	},

	thirdParty: {
		cardmarket: 276380,
		tcgplayer: 88780
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

