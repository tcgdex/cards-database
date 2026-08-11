import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kangaskhan"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'id-id': "Terdapat catatan yang isinya tentang Kangaskhan tanpa anak yang membesarkan anak manusia yang tersesat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tandukan Kepala"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Spike Draw"
		},

		effect: {
			'id-id': "Ambil 2 kartu dari atas Deck sendiri."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card