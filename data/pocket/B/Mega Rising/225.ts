import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Copycat"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle your hand into your deck. Draw a card for each card in your opponent's hand."
	},

	trainerType: "Supporter",

	boosters: ["mega-gyarados"]
}

export default card