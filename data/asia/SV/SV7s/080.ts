import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โคโจนโดะ",
		'id-id': "Mienshao"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'th-th': "สามารถใช้ขนที่แขนทั้งสองต่างแส้ได้อย่างคล่องแคล่ว เมื่อมันเริ่มโจมตีอย่างต่อเนื่องแล้วจะไม่มีใครสามารถหยุดมันได้",
		'id-id': "Ketika Mienshao menggunakan bulu tubuh kedua tangannya seperti cambuk secara terampil dan memulai serangan beruntun, siapa pun tidak dapat menghentikannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "หมุนลมกรด",
			'id-id': "Angin Ribut Melingkar"
		},

		effect: {
			'th-th': "ถ้าการ์ดบนมือฝ่ายตรงข้ามน้อยกว่าหรือเท่ากับ 5 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 60",
			'id-id': "Jika jumlah Kartu Pegangan lawan adalah 5 lembar atau kurang, kerusakan yang diberikan bertambah sejumlah 60."
		},

		damage: "30+",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card