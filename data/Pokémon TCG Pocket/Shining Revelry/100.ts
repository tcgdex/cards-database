import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmander"
	},

	description: {
		en: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Combustion"
		},

		damage: 40,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card