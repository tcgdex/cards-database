import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เน็คโคอาลา",
		'id-id': "Komala"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'th-th': "หลับตลอดชีวิต อาหารของเน็คโคอาลาคือใบไม้ที่มีพิษร้ายแรง ซึ่งมี เพียงตัวมันเองที่สามารถสลายพิษนั้นได้",
		'id-id': "Pokémon ini menghabiskan hidupnya dengan tidur. Makanannya adalah daun beracun mematikan yang racunnya hanya dapat diuraikan oleh Komala."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กู้ดไนท์น็อก",
			'id-id': "Ketukan Selamat Tidur"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ[หลับ] เทิร์น ถัดไปของฝ่ายเรา แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบน ตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+100]",
			'id-id': "Ubah kondisi Pokémon Bertarung kedua pemain masing-masing menjadi Tidur. Pada giliran sendiri berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 100."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card