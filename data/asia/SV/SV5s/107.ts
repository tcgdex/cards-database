import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Lickilicky"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'id-id': "Lickilicky memiliki lidah yang dapat memanjang hingga beberapa kali lipat tinggi tubuhnya. Misteri ini masih belum terpecahkan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Menindih"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Jilat-jilat Hurikan"
		},

		effect: {
			'id-id': "Lempar koin 4 kali. Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "70×",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card