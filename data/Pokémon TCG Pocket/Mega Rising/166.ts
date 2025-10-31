import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ferroseed"
	},

	illustrator: "ryoma uratsuka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "Mossy caves are their preferred dwellings.\nEnzymes contained in mosses help Ferroseed's\nspikes grow big and strong."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rolling Tackle"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card