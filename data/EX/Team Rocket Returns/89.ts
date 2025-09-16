import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Poké Ball",
		de: "Rocket's Poké Ball*"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		de: "Search your deck for a Pokémon with Dark in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 276381
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

