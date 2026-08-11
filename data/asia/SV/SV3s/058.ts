import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tadbulb"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'id-id': "Tadbulb menghasilkan listrik dengan menggoyangkan ekornya. Ketika merasakan adanya bahaya, Pokémon ini memberitahukan sesamanya dengan mengedipkan cahaya kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Elektrifikasi"
		},

		effect: {
			'id-id': "Pilih 1 lembar Energi Dasar {Listrik} dari Trash sendiri, lalu kenakan pada Pokémon ini."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'id-id': "Bola Petir"
		},

		damage: 30,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card