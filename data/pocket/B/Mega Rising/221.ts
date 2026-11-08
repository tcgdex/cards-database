import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Marlon"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Heal 70 damage from 1 of your Carracosta or Jellicent."
	},

	trainerType: "Supporter",

	boosters: ["mega-gyarados"]
}

export default card