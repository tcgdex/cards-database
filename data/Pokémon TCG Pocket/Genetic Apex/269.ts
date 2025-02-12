import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Koga"
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		en: "Put your Muk or Weezing in the Active Spot into your hand."
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: [Mewtwo]
}

export default card
