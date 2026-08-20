import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Torchic",
		fr: "Poussifeu"
	},

	illustrator: "GOSSAN",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [255],
	hp: 60,
	types: ["Fire"],

	description: {
		en: "A fire burns inside, so it feels very warm to hug.\nIt launches fireballs of 1,800 degrees Fahrenheit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card