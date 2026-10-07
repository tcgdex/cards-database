import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [532],
	rarity: "Common",
	set: Set,

	name: {
		ja: "ドッコラー",
		'zh-tw': "搬運小匠",
		th: "ด็อคโคเรอร์"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "自分の ３倍くらいの 角材を 持つように なった ドッコラーは 進化の 日が 近い。",
		'zh-tw': "如果搬運小匠可以搬起自己體重３倍左右的木材，就代表牠進化的日子要到了。",
		th: "ด็อคโคเรอร์ที่เริ่มยกท่อนไม้สี่เหลี่ยมขนาดประมาณ 3 เท่าของตัวเองได้ ก็ใกล้ถึงวันที่ตัวเองจะวิวัฒนาการ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "はたく",
			'zh-tw': "拍擊",
			th: "ปัด"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533782, tcgplayer: 569083, cardtrader: 240049 } }
	]
}

export default card