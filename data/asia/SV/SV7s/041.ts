import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มิกาลูซา",
		'id-id': "Veluza"
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'th-th': "มีความสามารถในการฟื้นร่างกายสูง ทิ้งเนื้อส่วนเกินของร่างกายเพื่อให้ตัวเบาลงและพุ่งเข้าโจมตีเหยื่อ",
		'id-id': "Veluza memiliki kemampuan regenerasi yang tinggi. Pokémon ini membuang daging berlebih di tubuhnya, lalu menyerbu mangsanya setelah tubuhnya menjadi ringan."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "จัดเตรียม",
			'id-id': "Persiapan Sebelum"
		},

		effect: {
			'th-th': "พลังงาน[ไร้สี]สำหรับใช้ท่าต่อสู้ของโปเกมอนนี้จะลดลง ตามจำนวนการ์ด [ไห่ไต้] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา",
			'id-id': "Energi {Bening} yang dibutuhkan oleh Pokémon ini untuk menggunakan serangan berkurang untuk tiap lembar Algo yang ada di Trash sendiri."
		}
	}],

	attacks: [{
		name: {
			'th-th': "โซนิคเอดจ์",
			'id-id': "Sonic Edge"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card