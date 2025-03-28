import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คิเทรุกุมะ"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		th: "เมื่อยอมรับเป็นพวกพ้อง จะกอดรัดเพื่อแสดงความรัก แต่อันตรายเพราะกระดูกอาจแหลกเป็นผงได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "พาวเวอร์ชาร์จ"
		},

		effect: {
			th: "เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ตบหนัก"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card