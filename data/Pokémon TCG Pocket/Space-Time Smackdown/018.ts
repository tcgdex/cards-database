import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Vespiquen"
	},

	illustrator: "chibi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Combee"
	},

	description: {
		en: "It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Pierce"
		},

		damage: 70,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
