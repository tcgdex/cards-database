import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大狼犬",
		th: "กราเอนา"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "會組成約１０隻規模的群體，靠著有條不紊的團隊合作 追擊並解決獵物。",
		th: "สร้างฝูงอยู่ด้วยกันประมาณ 10 ตัว ไล่ต้อนและพิชิตเหยื่อกันด้วยทีมเวิร์กที่มีระเบียบไม่แตกแยก"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "喧鬧咆哮",
			th: "เห่าสู้"
		},

		effect: {
			'zh-tw': "若對手的場上有「寶可夢【VMAX】」，則這隻寶可夢使用招式所需的能量，減少3個【無】能量。",
			th: "ถ้าบนกระดานฝ่ายตรงข้ามมี [โปเกมอน【VMAX】] อยู่ พลังงานที่โปเกมอนนี้ใช้สำหรับออกท่าต่อสู้ พลังงาน[ไร้สี]จะลดลง 3 ลูก"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "狂野衝撞",
			th: "ไวลด์แทคเคิล"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 50 ด้วย"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card