import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Chimchar"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "Its fiery rear end is fueled by gas made in its belly.\nEven rain can't extinguish the fire."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card