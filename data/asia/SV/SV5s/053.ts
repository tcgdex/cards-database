import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Zeraora"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'id-id': "Zeraora berlari secepat kilat dan mencabik-cabik musuhnya dengan cakar yang memancarkan listrik bertegangan tinggi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Kepalan Berkejut-kejut"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Strong Volt"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card