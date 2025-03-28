import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シャリタツex",
		'zh-tw': "米立龍ex",
		'zh-cn': "米立龍ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			ja: "ふいうちポンプ",
			'zh-tw': "突襲水泵",
			'zh-cn': "突襲水泵"
		},

		damage: 100,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}, {
		cost: ["Fire", "Water", "Darkness"],

		name: {
			ja: "シナバールアー",
			'zh-tw': "硃砂誘餌",
			'zh-cn': "硃砂誘餌"
		},

		effect: {
			ja: "自分の山札を上から10枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。",
			'zh-tw': "查看自己的牌庫上方10張卡，從其中選擇任意數量的寶可夢卡，放置於備戰區。將剩餘卡放回牌庫並重洗。",
			'zh-cn': "查看自己的牌庫上方10張卡，從其中選擇任意數量的寶可夢卡，放置於備戰區。將剩餘卡放回牌庫並重洗。"
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card