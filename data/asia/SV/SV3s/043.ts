import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Chinchou"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'id-id': "Di dasar laut yang gelap gulita, lampu di tentakel Chinchou yang selalu berkedip-kedip menjadi satu-satunya sarana untuk berkomunikasi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menerangi"
		},

		effect: {
			'id-id': "Lihat 1 kartu dari atas Deck sendiri, lalu kembalikan ke posisi semula. Pemain dapat mengembalikan kartu tersebut ke bawah Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Listrik Mini"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card