import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨牙鯊",
		th: "ซาเมฮาเดอร์"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "會將吞下的海水從臀部的孔中噴出，藉此來游動。對血的氣味非常敏感。",
		th: "ว่ายน้ำด้วยการพ่นน้ำทะเลที่กลืนเข้าไปออกมาทางก้น มีความรู้สึกไวต่อกลิ่นเลือด"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "挑釁",
			th: "ยั่วยุ"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว แล้วสลับกับโปเกมอนบนตำแหน่งต่อสู้"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "噴射啃咬",
			th: "เจ็ตไบต์"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "ในเทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card