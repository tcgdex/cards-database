import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵頭殼ex",
		th: "หัวเหล็กex"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鈷藍指令",
			th: "โคบอลต์คอมมานด์"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的「未來」寶可夢（「鐵頭殼ex」除外）使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอน [อนาคต] ฝ่ายเรา (ยกเว้น [หัวเหล็ก【ex】]) ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+20]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雙刃劍",
			th: "ดาบโค้งคู่"
		},

		effect: {
			'zh-tw': "對手的2隻寶可夢各受到50點傷害。這個招式的傷害不計算弱點・抵抗力與受到傷害的寶可夢身上的附加效果。",
			th: "โปเกมอนฝ่ายตรงข้าม 2 ตัว จะได้รับแดเมจตัวละ 50 แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนที่ได้รับแดเมจมาคิด"
		},

		cost: ["Psychic", "Colorless", "Colorless"]
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
	regulationMark: "H"
}

export default card