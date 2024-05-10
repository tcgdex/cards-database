import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "テッポウオ",
		'zh-tw': "鐵炮魚",
		th: "เทปโปโอ"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [223],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "吸盤の ように 変化した 背びれで マンタインに くっつき 食べ残しを わけてもらっている。",
		'zh-tw': "會用變成吸盤狀的背鰭吸附在巨翅飛魚身上， 吃牠平常吃剩下的東西。",
		th: "ใช้ครีบหลังที่แปลงรูปเป็นเหมือนปุ่มดูดเกาะติดแมนไทน์ เพื่อรอรับของที่กินเหลือ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "うちみず",
			'zh-tw': "潑灑清水",
			th: "ราดน้ำ"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card