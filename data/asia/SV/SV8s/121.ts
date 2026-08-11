import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Alolan Dugtrio",
		'th-th': "อโลลา ดักทริโอ"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'id-id': "Kecepatannya tidak begitu bagus karena kumis metaliknya berat, tetapi ia memiliki kekuatan untuk menggali tembus bebatuan dasar yang keras.",
		'th-th': "เนื่องจากหนวดที่มีคุณสมบัติเป็นโลหะนั้นมีน้ำหนักมาก จึงไม่ค่อยว่องไว นัก แต่มีพลังที่เจาะทะลวงได้แม้แต่หินผาแข็ง ๆ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Three Bingo",
			'th-th': "ทรีบิงโก"
		},

		effect: {
			'id-id': "Jika jumlah Kartu Pegangan sendiri bukan 3 lembar, serangan ini gagal.",
			'th-th': "ถ้าการ์ดบนมือฝ่ายเราไม่ใช่ 3 ใบ ท่าต่อสู้นี้จะล้มเหลว"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card