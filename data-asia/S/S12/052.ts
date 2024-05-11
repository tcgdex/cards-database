import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮熊貓",
		th: "ยันชัม",
		ja: "ヤンチャム"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "會模仿自己敬為頭領的流氓熊貓，向牠學習戰鬥 及捕捉獵物的方法。",
		th: "การเลียนแบบโกรอนดะที่เป็นลูกพี่จะทำให้เรียนรู้วิธีการต่อสู้หรือวิธีการจับเหยื่อได้",
		ja: "親分と 慕う ゴロンダの 真似を する ことで 戦い方や 獲物の 捕まえ方を 学ぶ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈打",
			th: "สับ",
			ja: "チョップ"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [674]
}

export default card