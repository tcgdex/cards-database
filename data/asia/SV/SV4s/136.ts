import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Magby"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 30,
	types: ["Fire"],

	description: {
		'id-id': "Magby tinggal di sekitar gunung berapi. Saat hari berakhir, Pokémon ini berendam di magma untuk menyembuhkan kelelahannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pemanas Berangsur-angsur"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan 6 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card