import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 呆呆獸",
		th: "กาลาร์ ยาดง"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "牠以只生長在伽勒爾地區的植物的種子為食，因此尾巴是辣味的。",
		th: "เพราะกินเมล็ดพืชที่มีปลูกอยู่เฉพาะในภูมิภาคกาลาร์จึงทำให้หางมีรสชาติเผ็ดร้อน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "引動之尾",
			th: "หางยั่วยวน"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว แล้วสลับกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card