import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Iron Crown",
		'th-th': "หัวเหล็ก"
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'id-id': "Kabarnya Pokémon ini menembakkan pedang bersinar untuk memotong dan mengoyak semua yang ada sekitarnya. Namun, tidak ada informasi lain dan identitasnya tidak terungkap.",
		'th-th': "ดูเหมือนว่าจะยิงใบมีดเรืองแสงออกมาเฉือนทุกสิ่งทุกอย่างรอบตัวเป็น ชิ้น ๆ แต่ไม่มีใครรู้ข้อมูลเกี่ยวกับมันนอกเหนือจากนั้น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Delete Slash",
			'th-th': "ดีลีตสแลช"
		},

		effect: {
			'id-id': "Jika jumlah Pokémon Cadangan lawan 3 atau lebih, kerusakan yang diberikan bertambah sejumlah 80.",
			'th-th': "ถ้าจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้ามมากกว่าหรือเท่ากับ 3 ตัว การโจมตีนี้ จะเพิ่มแดเมจอีก 80"
		},

		damage: "40+",
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'id-id': "Slicing Blade",
			'th-th': "สไลซ์เบลด"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"]
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