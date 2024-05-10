import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Kangaskhan"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		id: "Terdapat catatan yang isinya tentang Kangaskhan tanpa anak yang membesarkan anak manusia yang tersesat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tandukan Kepala"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Spike Draw"
		},

		effect: {
			id: "Ambil 2 kartu dari atas Deck sendiri."
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