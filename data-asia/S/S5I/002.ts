import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢歌仙人掌",
		th: "น็อคทัส"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "會成群跟在沙漠中的旅人後方，等待對方因疲累而變得無法動彈。",
		th: "จะเดินกันเป็นกลุ่มติดตามนักเดินทางในทะเลทรายอยู่ไม่ห่างเพื่อรอให้เหนื่อยจนขยับตัวไม่ไหว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拉扯",
			th: "ดึง"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว แล้วสลับกับโปเกมอนบนตำแหน่งต่อสู้"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "傲傲拳",
			th: "หมัดครวญคราง"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【惡】能量，則增加70點傷害。",
			th: "ถ้าโปเกมอนนี้มีพลังงาน [ความมืด] ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 70"
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card