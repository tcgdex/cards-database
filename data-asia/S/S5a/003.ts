import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大針蜂",
		th: "สเปียร์"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "有時會成群結隊地出現。能以極快的速度飛來飛去，並用尾部的毒針不斷刺擊對手。",
		th: "บางครั้งจะปรากฏตัวกันเป็นฝูง บินวนไปมาด้วยความเร็วสูงและทิ่มแทงเข็มพิษจากก้นไปทั่ว"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "對點針刺",
			th: "เหล็กในปลิดชีพ"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上附有特殊能量，則將那隻寶可夢【氣絕】。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีพลังงานพิเศษติดอยู่ จะทำให้โปเกมอนนั้น [หมดสภาพ]"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "噴射尖槍",
			th: "เจ็ตสเปียร์"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 110,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card