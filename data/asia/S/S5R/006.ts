import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "櫻花兒",
		th: "เชอริม"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "盛開的花瓣中散發出的微微香氣會吸引蟲寶可夢聚集而來。",
		th: "กลิ่นหอมอ่อน ๆ ที่ลอยมาจากกลีบดอกอันเบ่งบานทำให้โปเกมอนแมลงมารวมตัวกัน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "春爛漫",
			th: "ดอกไม้ผลิบานสะพรั่ง"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【草】能量卡，附於自己的寶可夢（「擁有規則的寶可夢」除外）身上。",
			th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน [หญ้า] 1 ใบจากการ์ดบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา (ยกเว้น [โปเกมอนที่มีกฎ] )"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "種子炸彈",
			th: "ระเบิดเมล็ดพืช"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card