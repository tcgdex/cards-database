import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "連擊武道熊師",
		th: "วูลาโอส จู่โจมต่อเนื่อง"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "以多擊必勝作為信念。會如流水般連續不斷地用打擊招式轟打對手。",
		th: "เชื่อว่าจะสยบคู่ต่อสู้ลงได้ด้วยกลยุทธ์จู่โจมต่อเนื่อง ใช้ท่าต่อสู้ตีไม่ยั้ง แล้วโจมตีฝ่ายตรงข้ามอย่างต่อเนื่องราวกับกระแสน้ำที่ไม่หยุดไหล"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "利爪揮砍",
			th: "สแลชคลอว์"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "連彈衝刺",
			th: "พุ่งจู่โจมต่อเนื่อง"
		},

		effect: {
			'zh-tw': "造成自己的場上「連擊」寶可夢的數量×30點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอน บนกระดานฝ่ายเรา x30"
		},

		damage: "30×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card