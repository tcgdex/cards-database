import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛頭小鷹",
		th: "วาชิบอน"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "握力強，能把堅硬的樹果弄得粉碎。性急愛吵架，無論對誰都會挑起戰鬥。",
		th: "มีแรงบีบทำให้ผลไม้ที่แข็งละเอียดเป็นผุยผง ชอบทะเลาะวิวาท ไม่ว่าใครก็ท้าสู้ไปหมด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吹飛",
			th: "เป่ากระเด็น"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "ให้ฝ่ายตรงข้ามสลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอน 1 ตัวบนเบนช์ฝ่ายตรงข้าม [ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้]"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card