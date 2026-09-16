import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Switch"
	},

	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon."
	},
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907734,
				tcgplayer: 716516
			}
		}
	],
}

export default card
