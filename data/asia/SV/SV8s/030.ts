import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Crocalor",
		'th-th': "อาจิเกเตอร์"
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'id-id': "Katup pita suara dan kantong api Crocalor saling terhubung. Pokémon ini menyemburkan api sambil mengeluarkan suara serak.",
		'th-th': "เส้นเสียงและวาล์วของถุงไฟมีความสัมพันธ์กันอย่างใกล้ชิด พ่นไฟ ออกมาพร้อมกับส่งเสียงแหบ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Heat Breath",
			'th-th': "ฮีทเบรธ"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 50.",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 50"
		},

		damage: "30+",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card