import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵炮魚",
		th: "เทปโปโอ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "會用變成吸盤狀的背鰭吸附在巨翅飛魚身上，吃牠平常吃剩下的東西。",
		th: "ใช้ครีบหลังที่แปลงรูปเป็นเหมือนปุ่มดูดเกาะติดแมนไทน์ เพื่อรอรับของที่กินเหลือ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水槍",
			th: "ปืนฉีดน้ำ"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "銳利鰭",
			th: "ครีบแหลมคม"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card