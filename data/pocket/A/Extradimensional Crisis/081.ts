import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gladion",
		'fr-fr': "Gladio"
	},

	illustrator: "hncl",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 random Type: Null or Silvally from your deck into your hand.",
		'fr-fr': "Ajoutez une carte au hasard parmi  et  de votre deck à votre main."
	},

	trainerType: "Supporter"
}

export default card