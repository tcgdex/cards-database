import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คิบาโกะ",
		id: "Axew"
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		th: "ถ้าเจอรอยกัดที่เป็นเอกลักษณ์ตามหินหรือต้นไม้ แสดงว่าคงมีคิบาโกะอาศัยอยู่แถว ๆ นั้น",
		id: "Jika menemukan bekas gigitan yang khas pada batu dan pohon, itu berarti Axew tinggal di dekat sana."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ข่วน",
			id: "Mencakar"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			th: "เขี้ยวคม",
			id: "Taring Tajam"
		},

		damage: 30,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card