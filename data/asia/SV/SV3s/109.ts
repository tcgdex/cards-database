import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Absol ex"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Penglihatan Masa Depan"
		},

		effect: {
			'id-id': "Lihat 3 kartu dari atas Deck sendiri atau lawan, tukar urutan kartu sesukanya, lalu kembalikan ke atas Deck."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Cursed Slug"
		},

		effect: {
			'id-id': "Jika jumlah Kartu Pegangan lawan adalah 3 lembar atau kurang, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "100+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card