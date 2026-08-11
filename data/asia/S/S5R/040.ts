import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡拉卡拉",
		th: "คาระคาระ"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "頭上戴著母親的骨頭，所以看不見牠的長相和表情，只知道牠一直在哭泣。",
		th: "เนื่องจากเอากระดูกของแม่มาสวม ก็เลยไม่เห็นหน้าตาหรืออารมณ์ที่แสดงออก เพียงแต่ไม่ว่าเมื่อไหร่ก็ร้องไห้อยู่เสมอ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "敲擊",
			th: "ตี"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card