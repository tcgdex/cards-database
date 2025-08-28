import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Dragalge"
	},

	illustrator: "5ban Graphics",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Skrelp"
	},

	description: {
		en: "Using a liquid poison, Dragalge indiscriminately\nattacks anything that wanders into its territory.\nThis poison can corrode the undersides of boats."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sludge Bomb"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card