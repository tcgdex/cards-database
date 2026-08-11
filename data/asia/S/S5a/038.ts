import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "石丸子",
		th: "ดันโกโร"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "會對聲音產生反應而動起來。在能量核心的影響下，牠摸起來暖暖的。",
		th: "จะเริ่มเคลื่อนตัวตอบรับกับเสียงที่ได้ยิน พอแตะตัวก็จะอุ่นเล็กน้อยเพราะอิทธิพลของแกนพลังงาน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擲泥",
			th: "สาดโคลน"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "滾動衝撞",
			th: "กลิ้งโจมตี"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card