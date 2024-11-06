import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "オコリザル",
		'zh-tw': "火爆猴",
		'zh-cn': "火爆猴"
	},

	illustrator: "Felicia Chen",
	rarity: "Common",
	category: "Pokemon",
	dexId: [57],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "ある研究者の 学説では モンスターボールの 中でも オコリザルは 怒っているらしい。",
		'zh-tw': "某位研究者的學說中提到， 即使在精靈球裡， 火爆猴好像也在發怒。",
		'zh-cn': "某位研究者的學說中提到， 即使在精靈球裡， 火爆猴好像也在發怒。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あしばらい",
			'zh-tw': "掃腿",
			'zh-cn': "掃腿"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "メガトンパンチ",
			'zh-tw': "百萬噸重拳",
			'zh-cn': "百萬噸重拳"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card