import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頭巾混混",
		th: "ซึรุซึคิน"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "雖然性情非常粗魯，但也有重視家族、夥伴和地盤的一面。",
		th: "มีนิสัยหยาบคายมากแต่จะให้ความสำคัญกับครอบครัว พวกพ้องและอาณาเขตของตน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "恐嚇掠奪",
			th: "ขู่กรรโชก"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			th: "เลือกการ์ดบนมือฝ่ายตรงข้าม 1 ใบโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card