import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Hippowdon"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Hippopotas"
	},

	description: {
		en: "It is surprisingly quick to anger. It holds its mouth agape as a display of its strength."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Earthen Press"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card
