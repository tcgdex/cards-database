import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛狗V",
		th: "มูแลนด์V"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "再續獠牙",
			th: "คมเขี้ยวขย้ำซ้ำ"
		},

		effect: {
			'zh-tw': "若這個招式的傷害將對手的【基礎】寶可夢【氣絕】，則多獲得1張獎賞卡。",
			th: "ด้วยแดเมจจากท่าต่อสู้นี้ ถ้าโปเกมอน [พื้นฐาน] ฝ่ายตรงข้าม [หมดสภาพ] แล้ว หยิบการ์ดรางวัลเพิ่ม 1 ใบ"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝撞",
			th: "ไวลด์แทคเคิล"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 30 ด้วย"
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card