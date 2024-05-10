import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Dwebble"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		id: "Jika tidak menemukan batu kecil yang cocok untuk dijadikan rumah, kadang ada Dwebble yang tinggal di lubang tubuh Hippowdon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menghantam"
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