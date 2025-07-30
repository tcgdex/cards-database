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
		de: "Discard a card from your hand. Then, draw 3 cards. If you dicard a Pokémon that has Dark or Rocket's in its name, draw 4 cards instead."
	},

	thirdParty: {
		cardmarket: 276380
	}
}

export default card
