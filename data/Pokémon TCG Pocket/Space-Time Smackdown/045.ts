import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Abomasnow"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Snover"
	},

	description: {
		en: "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Frost Breath"
		},

		damage: 120,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 4
}

export default card
