import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Electrode"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Voltorb"
	},

	description: {
		en: "The more energy it charges up, the faster it gets. But this also makes it more likely to explode."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rolling Attack"
		},

		damage: 50,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
