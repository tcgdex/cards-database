import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Looker",
		'fr-fr': "Beladonis"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "Your opponent reveals all of the Supporter cards in their deck.",
		'fr-fr': "Votre adversaire dévoile toutes ses cartes Supporter contenues dans son deck."
	},

	trainerType: "Supporter"
}

export default card