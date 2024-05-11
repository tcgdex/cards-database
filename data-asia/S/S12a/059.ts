import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑夜魔靈",
		th: "โยนัว"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'zh-tw': "沒人知道牠是否擁有意識。會從來自靈界的電波中接受指示， 將人和寶可夢帶走。",
		th: "ไม่ปรากฏชัดเจนว่ามีความคิดหรือไม่ คอยทำตามสัญญาณที่ส่งมาจากโลกวิญญาณ และจะลักพาคนหรือโปเกมอนไป"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "特殊轉移",
			th: "สเปเชียลทรานสเฟอร์"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上寶可夢身上附加的特殊能量，改附於自己的其他寶可夢身上。",
			th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกพลังงานพิเศษที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 1 ลูก ย้ายไปติดกับโปเกมอนตัวอื่นของฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "靈魂吃食",
			th: "โซลอีต"
		},

		damage: 120,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card