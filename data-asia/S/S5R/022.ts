import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [223],
	rarity: "Common",
	set: Set,

	name: {
		ja: "テッポウオ",
		'zh-tw': "鐵炮魚",
		th: "เทปโปโอ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "吸盤の ように 変化した 背びれで マンタインに くっつき 食べ残しを わけてもらっている。",
		'zh-tw': "會用變成吸盤狀的背鰭吸附在巨翅飛魚身上，吃牠平常吃剩下的東西。",
		th: "ใช้ครีบหลังที่แปลงรูปเป็นเหมือนปุ่มดูดเกาะติดแมนไทน์ เพื่อรอรับของที่กินเหลือ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍",
			th: "ปืนฉีดน้ำ"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			ja: "するどいひれ",
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
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533682, tcgplayer: 569063, cardtrader: 240027 } }
	]
}

export default card