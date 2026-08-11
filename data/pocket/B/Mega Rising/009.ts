import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Nuzleaf"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [274],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Seedot"
	},

	description: {
		en: "They live in holes bored in large trees. The sound\nof Nuzleaf's grass flute fills listeners with dread."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gentle Slap"
		},

		damage: 40,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card