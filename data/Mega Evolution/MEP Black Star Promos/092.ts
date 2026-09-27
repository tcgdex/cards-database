import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	cameoDexIds: [25, 54, 185, 363, 700, 737, 926, 950, 999, 1018],

	name: {
		en: "Paradise Resort",
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Trainer",
	trainerType: "Stadium",

	effect: {
		en: "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is {C} less.",
	},
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 903686,
				tcgplayer: 714597
			}
		},
		{
			type: "holo",
			stamp: ["staff"],
			thirdParty: {
				tcgplayer: 714598
			}
		}
	],
}

export default card
