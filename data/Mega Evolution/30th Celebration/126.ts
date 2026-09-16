import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Poke Pad"
	},

	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)"
	},
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907733,
				tcgplayer: 716515
			}
		}
	],
}

export default card
