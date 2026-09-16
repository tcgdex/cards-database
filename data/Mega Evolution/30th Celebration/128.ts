import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Ultra Ball"
	},

	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "You can use this card only if you discard 2 other cards from your hand. Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
	},
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907735,
				tcgplayer: 716517
			}
		}
	],
}

export default card
