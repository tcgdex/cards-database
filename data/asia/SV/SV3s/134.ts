import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Orthworm"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'id-id': "Jika diserang musuh, Orthworm menggunakan bulu badannya seperti kepalan tangan dan menyarangkan badai pukulan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Punch & Draw"
		},

		effect: {
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			'id-id': "Terjangan Detik Terakhir"
		},

		effect: {
			'id-id': "Jika sisa Deck sendiri adalah 3 lembar atau kurang, kerusakan yang diberikan bertambah sejumlah 150."
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