import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勒克貓",
		th: "ลุคซิโอ"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "在銳利的爪子尖端有強烈的電流流過，只要稍微擦到，就能讓對手暈厥。",
		th: "ที่ปลายเล็บอันแหลมคมจะมีไฟฟ้าไหลผ่านอยู่ เพียงแค่เฉี่ยวโดนก็ทำให้ฝ่ายตรงข้ามหมดสติได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "跳踢",
			th: "จัมป์คิก"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนฝ่ายตรงข้าม 1 ตัว ได้รับแดเมจ 30 [โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด]"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "伏特頭擊",
			th: "เฮดโบลท์"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card