import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "一擊武道熊師VMAX",
		th: "วูลาโอส จู่โจมครั้งเดียวVMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "正拳突",
			th: "กำปั้นตรง"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超極巨奪命一擊",
			th: "กิกะจู่โจมครั้งเดียว"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			th: "ทิ้งพลังงานที่ติดกับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด ไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามมาคำนวณแดเมจของท่าต่อสู้นี้"
		},

		damage: 270,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card