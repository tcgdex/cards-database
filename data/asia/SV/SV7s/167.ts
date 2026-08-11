import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เรเดียน"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "สปีดสตาร์"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card