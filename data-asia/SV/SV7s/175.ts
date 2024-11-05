import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บาชูรุ"
	},

	illustrator: "MARINA Chikazawa",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		th: "เพราะผลิตไฟฟ้าด้วยตัวเองไม่ได้ จึงมักเกาะโปเกมอนขนาดใหญ่เพื่อดูดเอาประจุไฟฟ้าสถิต"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "บาชูชาร์จ"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] และการ์ด [พลังงานพื้นฐาน[สายฟ้า]] ได้สูงสุดอย่างละ 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card