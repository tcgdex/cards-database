import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ribombee"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Ribombee membuat kue bola dengan mencampurkan serbuk sari dan nektar. Kue bola tersebut memiliki efek berbeda tergantung jenis dan kuantitas bahan yang dicampur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Serbuk Sari Berlebih"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, saat Pokémon yang menerima serangan ini KO, ambil Kartu Point 2 lembar lebih banyak."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card