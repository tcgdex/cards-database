import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵骨土人",
		th: "โดเท็คคทซึ"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "能夠靈巧地操縱鋼骨。雖然對拆除得心應手，但卻不太擅長組裝。",
		th: "ใช้โครงเหล็กได้อย่างช่ำชอง ถนัดในการรื้อถอนแต่ไม่เก่งในเรื่องก่อสร้าง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拍擊",
			th: "ปัด"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card