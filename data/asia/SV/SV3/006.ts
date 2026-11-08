import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ミツハニー",
		'zh-tw': "三蜜蜂",
		'th-th': "มิทซึฮันนี"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [415],
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "夜に なると １００匹 ほどの ミツハニーが 寄り添い合って 大きな かたまりで 眠る。",
		'zh-tw': "到了晚上就會有１００隻左右的三蜜蜂集聚成堆，依偎著彼此睡覺。",
		'th-th': "มิทซึฮันนีกว่า 100 ตัวจะซุกตัวนอนกันเป็นก้อนใหญ่ ๆ ในตอนกลางคืน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "おすそわけ",
			'zh-tw': "分贈",
			'th-th': "แบ่งให้"
		},

		effect: {
			'ja-jp': "自分のベンチポケモン1匹のHPを「20」回復する。",
			'zh-tw': "將自己的1隻備戰寶可夢恢復「20」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว [20]"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'ja-jp': "ぶつかる",
			'zh-tw': "衝撞",
			'th-th': "กระแทก"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723918,
				tcgplayer: 566960,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card