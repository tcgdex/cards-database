import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Wimpod"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'id-id': "Wimpod selalu hidup bersama kelompoknya dan berjaga-jaga atas bahaya di sekelilingnya. Begitu merasakan kehadiran musuh, mereka segera kabur dan tercerai berai."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Makan Sembunyi-sembunyi"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lalu buang ke Trash."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Menyeruduk"
		},

		damage: 30,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card