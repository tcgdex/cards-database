import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Litten"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'id-id': "Asal ada waktu luang, Litten menjilati dan merawat bulunya. Ia membakar bulu rontok yang terkumpul di dalam perutnya, lalu mengeluarkan jurus api."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengelabui"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 10,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card