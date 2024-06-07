import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "提布莉姆",
		th: "เทบริม"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "會用頭上的辮子攻擊對手，讓對方安靜下來。破壞力強到能一擊ＫＯ職業拳擊手。",
		th: "ชกฝ่ายตรงข้ามให้สงบลงด้วยพวงผมบนหัว มีพลังถึงขนาดทำให้นักมวยมืออาชีพน็อกเอาท์ได้ในหมัดเดียว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "螺旋吸取",
			th: "สไปรัลเดรน"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
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