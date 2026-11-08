import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hala"
	},

	illustrator: "Teeziro",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "During your opponent's next turn, if your Hariyama or Crabominable would be Knocked Out by damage from an attack, it is not Knocked Out and its remaining HP becomes 10."
	},

	trainerType: "Supporter",
	boosters: ["mega-blaziken"]
}

export default card