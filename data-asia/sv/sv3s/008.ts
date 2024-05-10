import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Phantump"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		id: "Phantump bersuara dengan suara mirip anak manusia untuk memancing orang dewasa masuk ke dalam hutan dan menyesatkan mereka."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tusukan Ranting"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card