import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เซราโอรา"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		th: "วิ่งด้วยความเร็วที่เทียบเท่าฟ้าแลบแล้วเข้าฉีกกระชากศัตรูด้วยกรงเล็บที่ปล่อยไฟฟ้าแรงสูง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "คอมแบตธันเดอร์"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม x20"
		},

		damage: "20+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card