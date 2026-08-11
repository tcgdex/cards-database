import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Lycanroc"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'id-id': "Lycanroc menyayat siapa pun yang mendekatinya dengan surai batunya. Bahkan, Pokémon ini tidak mematuhi perintah pelatihnya jika ia tidak menyukainya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Taring Menghabisi"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan tidak memiliki Token Kerusakan, serangan ini gagal."
		},

		damage: 90,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Cakar Penebas"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card