import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Mars"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "Your opponent shuffles their hand into their deck and draws a card for each of their remaining points needed to win."
	},

	trainerType: "Supporter",
	
	boosters: [Palkia]
}

export default card