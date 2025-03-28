import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บาคุกาเมส"
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		th: "แบกกระดองที่ถูกเคลือบด้วยดินระเบิด เอาคืนคู่ต่อสู้ที่โจมตีมาด้วยระเบิดยักษ์"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เฟลมเซอร์เคิล"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้] เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			th: "ไฟลุกพุ่งเข้าใส่"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 60 ด้วย"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card