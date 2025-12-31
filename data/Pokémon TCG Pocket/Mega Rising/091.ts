import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Blitzle"
	},

	description: {
		en: "They have lightning-like movements.\nWhen Zebstrika run at full speed, the sound of\nthunder reverberates."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electric Ball"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card