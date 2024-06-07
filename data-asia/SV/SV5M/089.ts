import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨鉗螳螂ex",
		th: "ฮัซซัมex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "鋼翼",
			th: "ปีกเหล็ก"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-50]"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "十字破壞",
			th: "ครอสเบรกเกอร์"
		},

		effect: {
			'zh-tw': "將最多2張這隻寶可夢身上附加的【鋼】能量卡丟棄，造成其張數×120點傷害。",
			th: "ทิ้งพลังงาน[โลหะ]ที่ติดอยู่กับโปเกมอนนี้ได้สูงสุด 2 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x120"
		},

		damage: "120×",
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card