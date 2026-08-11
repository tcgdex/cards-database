import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Swanna"
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'id-id': "Konon banyak seniman yang mendapatkan inspirasi dari tarian elok yang ditarikan Pokémon ini di saat langit temaram."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Sayap Semangat Petarung"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 90."
		},

		damage: "20+",
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Embusan Angin"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card