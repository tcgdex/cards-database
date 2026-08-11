import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โอโนนโดะ"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'th-th': "ใช้เขี้ยวขนาดใหญ่แล่เหยื่ออย่างประณีตเพื่อแยกส่วนที่กินกับส่วนที่เก็บ"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "บรรยากาศตึงเครียด"
		},

		effect: {
			'th-th': "โปเกมอนนี้ เมื่อฝ่ายตรงข้ามนำการ์ดไอเท็มหรือการ์ดซัพพอร์ตจากบนมือออกมาใช้ จะไม่ได้รับเอฟเฟกต์นั้น"
		}
	}],

	attacks: [{
		name: {
			'th-th': "คลื่นมังกร"
		},

		effect: {
			'th-th': "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 80,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card