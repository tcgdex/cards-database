import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Persian"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Meowth"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Shadow Claw"
		},

		effect: {
			en: "Flip a coin. If heads, discard a random card from your opponent's hand."
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
