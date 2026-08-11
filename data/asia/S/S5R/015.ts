import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燒火蚣",
		th: "ยาคุเดะ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "會用滾燙的身體勒緊獵物，等到烤得恰到好處之時，就把牠們大口大口地吃掉。",
		th: "ห่อตัวเหยื่อด้วยร่างที่ปล่อยความร้อนออกมา พอไหม้เกรียมกำลังดีก็สวาปามเลย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼燒",
			th: "เพลิงประลัยกัลป์"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [ไหม้]"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card