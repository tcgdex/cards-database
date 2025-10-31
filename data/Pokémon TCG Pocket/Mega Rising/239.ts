import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Gothita"
	},

	illustrator: "Orca",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Beware of touching the ribbon-shaped feelers\nthat control its psychic power. Gothita will begin\nbawling if you do."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card