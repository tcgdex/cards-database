import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Lampent"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Litwick"
	},

	description: {
		en: "It lurks in cities, pretending to be a lamp.\nOnce it finds someone whose death is near,\nit will trail quietly after them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Will-O-Wisp"
		},

		damage: 40,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card