import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Orthworm"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		id: "Jika diserang musuh, Orthworm menggunakan bulu badannya seperti kepalan tangan dan menyarangkan badai pukulan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Punch & Draw"
		},

		effect: {
			id: "Ambil 2 kartu dari atas Deck sendiri."
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			id: "Terjangan Detik Terakhir"
		},

		effect: {
			id: "Jika sisa Deck sendiri adalah 3 lembar atau kurang, kerusakan yang diberikan bertambah sejumlah 150."
		},

		damage: "90+",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card