import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โจโรเนโกะ <ของ N>",
		'id-id': "Purrloin <N>"
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'th-th': "ทำให้ฝ่ายตรงข้ามเผลอเข้ามาชื่นชมความน่ารักของมัน แล้วใช้เล็บ ข่วนโดยไม่ทันให้ตั้งตัวและหัวเราะเยาะใส่",
		'id-id': "Dengan tingkahnya yang imut, Purrloin membuat lawannya lengah. Saat lawan menghampirinya, Pokémon ini mencakar lawan dengan cakarnya yang tajam dan menertawakannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ลักขโมย",
			'id-id': "Mencurangi"
		},

		effect: {
			'th-th': "ดูการ์ดบนมือฝ่ายตรงข้าม เลือกการ์ด 1 ใบจากในนั้น ใส่กลับไปด้านล่าง ของสำรับการ์ดฝ่ายตรงข้าม",
			'id-id': "Lihat Kartu Pegangan lawan, pilih 1 kartu di antaranya, lalu kembalikan ke bawah Deck lawan."
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card