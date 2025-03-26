import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Kadabra"
	},

	illustrator: "Mousho",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Abra"
	},

	description: {
		en: "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psyshot"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card