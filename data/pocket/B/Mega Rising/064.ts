import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Palpitoad"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [536],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Tympole"
	},

	description: {
		'en-us': "On occasion, their cries are sublimely pleasing to\nthe ear. Palpitoad with larger lumps on their\nbodies can sing with a wider range of sounds."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Hyper Voice"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card