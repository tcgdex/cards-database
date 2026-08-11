import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kilowattrel",
		'th-th': "ไทไคเด็น"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'id-id': "Kilowattrel menyimpan listrik yang dibuat menggunakan sayapnya di kantong tenggorokannya. Pokémon ini tidak pandai berenang karena kandungan minyak pada bulunya sangat sedikit.",
		'th-th': "สะสมไฟฟ้าที่สร้างจากปีกไว้ในถุงที่คอ ปริมาณน้ำมันในขนปีกนั้นน้อย มากจึงไม่ถนัดการว่ายน้ำ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Melayang Rendah",
			'th-th': "ถลาลม"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Storm Bolt",
			'th-th': "สตอร์มโบลต์"
		},

		effect: {
			'id-id': "Pindahkan sesukanya semua Energi yang dikenakan pada Pokémon ini ke Pokémon Cadangan.",
			'th-th': "นำพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมด ย้ายไปติดกับโปเกมอนบนเบนช์ตาม ชอบ"
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card