import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Monferno"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Chimchar"
	},

	description: {
		en: "It skillfully controls the intensity of the fire on its\ntail to keep its foes at an ideal distance."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fiery Punch"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card