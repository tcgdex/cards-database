import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>阿柏怪",
		'zh-cn': "<火箭隊的>阿柏怪",
		ja: "ロケット団のアーボック"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "腹部的花紋看起來像一張可怕的臉。 弱小的敵人只要看到 這個花紋就會被嚇跑。",
		'zh-cn': "腹部的花紋看起來像一張可怕的臉。 弱小的敵人只要看到 這個花紋就會被嚇跑。",
		ja: "お腹の 模様が 怖い顔に 見える。 弱い敵は その模様を 見ただけで 逃げだしてしまう。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "瞪眼效用",
			'zh-cn': "瞪眼效用",
			ja: "にらみをきかす"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手不可從手牌將擁有特性的寶可夢（「火箭隊的寶可夢」除外）放置於場上。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，對手不可從手牌將擁有特性的寶可夢（「火箭隊的寶可夢」除外）放置於場上。",
			ja: "このポケモンがバトル場にいるかぎり、相手は手札から特性を持つポケモン（「ロケット団のポケモン」をのぞく）を場に出せない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "旋轉之尾",
			'zh-cn': "旋轉之尾",
			ja: "スピンテール"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的所有寶可夢各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のポケモン全員に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [24]
}

export default card