import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Melmetal"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		id: "Tubuh Melmetal berkarat dan hancur ketika masa hidupnya berakhir. Kepingan kecil yang tersisa akan bangkit kembali menjadi Meltan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Hantaman Penuh Tenaga"
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			id: "Iron Bash"
		},

		damage: 230,
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card