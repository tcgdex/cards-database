import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
	}
}

export default card
