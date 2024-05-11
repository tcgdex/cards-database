import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哈克龍",
		th: "ฮาคุริว"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'zh-tw': "棲息在清澈的海洋或湖泊。能利用操縱天氣的力量， 乘著風升上天空。",
		th: "อาศัยอยู่ตามทะเลหรือทะเลสาบที่สวยสะอาด ใช้พลังควบคุมสภาพอากาศขี่ลมแล้วบินขึ้นท้องฟ้า"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "緊束",
			th: "รัด"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "衝浪",
			th: "โต้คลื่น"
		},

		damage: 80,
		cost: ["Water", "Lightning", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card