import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Krokorok"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Sandile"
	},

	description: {
		en: "Protected by thin membranes, their eyes can see<br />even in the dead of night. They live in groups of<br />a few individuals."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Light Punch"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card