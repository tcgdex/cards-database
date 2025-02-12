import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Brock"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		en: "Take 1 F Energy from your Energy Zone and attach it to your Golem or Onix."
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: [Pikachu]
}

export default card
