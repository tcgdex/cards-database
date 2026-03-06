import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Persian"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [53],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Meowth"
	},

	description: {
		en: "Although its fur has many admirers, it is tough to\nraise as a pet because of its fickle meanness."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Shadow Claw"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random card from your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card