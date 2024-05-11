import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		th: "โดคุเคล",
		'zh-tw': "毒粉蛾"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		th: "มีนิสัยชอบเข้าใกล้กองไฟในยามค่ำคืนอันมืดมิด โปรยเกล็ดปีกที่มีพิษรุนแรง จนต้องลำบากในการไล่มันออกไปจากหมู่บ้าน",
		'zh-tw': "有著被黑暗中的篝火吸引的習性。會散布毒性猛烈的鱗粉，令人們 為了將牠們驅離村落而煞費苦心。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "ผงย่ำแย่",
			'zh-tw': "谷底粉"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[สับสน] ด้วย[พิษ]นี้ จำนวนตัวนับแดเมจที่วางจะเป็น 8 ตัว",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。因這個【中毒】而放置的傷害指示物的數量改為8個。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "คัตเตอร์วินด์",
			'zh-tw': "利刃之風"
		},

		damage: 110,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card