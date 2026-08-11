import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "車輪毬",
		th: "วีกา"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "平時雖然一動也不動。但遇襲時就會高速旋轉四處奔馳，並以身體撞擊來反擊。",
		th: "ปกติจะไม่ขยับตัวแต่ถ้าถูกเล่นงานเมื่อไหร่ จะโต้กลับด้วยการหมุนตัวด้วยความเร็วสูงแล้วเอาตัวพุ่งชน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "毒針",
			th: "เหล็กในพิษ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [พิษ]"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "滾動衝撞",
			th: "กลิ้งโจมตี"
		},

		damage: 50,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card