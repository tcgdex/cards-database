import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏鴉頭頭",
		th: "ดอนคาราซึ"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "與敵人的戰鬥幾乎全由手下來應付。只有在最後給對手致命一擊的時候，才會弄髒自己的手。",
		th: "ส่วนใหญ่ที่ต่อสู้กับศัตรูคือลูกน้อง จะทำให้มือตัวเองแปดเปื้อนเฉพาะตอนปลิดลมหายใจสุดท้ายของคู่ต่อสู้เท่านั้น"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "怒氣俯衝",
			th: 'โวลเทจไดฟ์'
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上附有特殊能量，則增加80點傷害。",
			th: 'ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีพลังงานพิเศษติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80'
		},

		damage: "80+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "不眠",
			th: "นอนไม่หลับ"
		},

		effect: {
			th: "โปเกมอนนี้จะไม่เป็นสภาวะ [หลับ]",
			'zh-tw': "這隻寶可夢不會【睡眠】。"
		}
	}]
}

export default card