import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [343],
	rarity: "Common",
	set: Set,

	name: {
		ja: "ヤジロン",
		'zh-tw': "天秤偶",
		th: "ยาจิลอน"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "古代 遺跡で 発見された。 回転 しながら 移動。 夜 眠る ときも 一本足だ。",
		'zh-tw': "在古代遺跡被發現。會一邊旋轉一邊移動。晚上睡覺的時候也是單腳站著。",
		th: "ถูกค้นพบในซากโบราณสถาน เคลื่อนตัวไปพร้อม ๆ กับหมุนตัว แม้เวลานอนตอนกลางคืนก็ยืนด้วยขาข้างเดียว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "じばく",
			'zh-tw': "自爆",
			th: "ระเบิดตัวเอง"
		},

		effect: {
			ja: "このポケモンにも60ダメージ。",
			'zh-tw': "這隻寶可夢也受到60點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับ 60 แดเมจด้วย"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533742, tcgplayer: 569075, cardtrader: 240039 } }
	]
}

export default card