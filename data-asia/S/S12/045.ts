import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咚咚鼠",
		th: "เดเด็นเนะ"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "能用鬍鬚接收來自夥伴們的電波，藉此向彼此分享 哪裡有食物或電力。",
		th: "ใช้หนวดจับคลื่นสัญญาณที่พวกพ้องปล่อยออกมา ทุกตัวจะแบ่งปันตำแหน่งของอาหารและไฟฟ้าให้กัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尾擊",
			th: "ฟาดหาง"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咚咚短路",
			th: "เดเดช็อต"
		},

		effect: {
			'zh-tw': "這個招式必須在上個自己的回合「托戈德瑪爾」使用了「托戈衝刺」才可使用。將對手的戰鬥寶可夢【麻痺】。",
			th: "ท่าต่อสู้นี้ ในเทิร์นก่อนของฝ่ายเรา ถ้า [โทเกะเดมารุ] ไม่ได้ใช้ [โทเกะแดช] จะใช้ไม่ได้ ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		},

		damage: 60,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card