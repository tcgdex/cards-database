import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โมโรบาเรรุ",
		'id-id': "Amoonguss"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'th-th': "ระวังสปอร์พิษที่มันพ่นออกมาให้ดี ถ้าโดนจะมีเห็ดที่เหมือนหมวกเห็ดของโมโรบาเรรุงอกขึ้นมาที่ส่วนนั้น",
		'id-id': "Hati-hati dengan spora racun yang dikeluarkan Amoonguss. Akan tumbuh jamur yang mirip dengan topi Pokémon ini pada bagian yang terkena."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "สปอร์อันตราย",
			'id-id': "Spora Berbahaya"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Racun dan Lumpuh."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card