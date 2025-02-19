import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Monferno"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Chimchar"
	},

	description: {
		en: "It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fiery Punch"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card
