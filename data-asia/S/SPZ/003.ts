import { Card } from "../../../interfaces"
import Set from "../SPZ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "茸茸羊",
		ja: "モココ"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "會將電力儲存在鬆軟的毛中。因為儲存了太多電力，身上有些地方變得光禿禿的。",
		ja: "ふかふかの 毛に 電気を ためこむ。 蓄えすぎて ところどころ つるつるに 禿げあがって しまった。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "電氣發電機",
			ja: "エレキダイナモ"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【雷】能量卡，附於備戰寶可夢身上。",
			ja: "自分の番に1回使える。自分のトラッシュからエネルギーを1枚選び、ベンチポケモンにつける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "電球",
			ja: "エレキボール"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	dexId: [180]
}

export default card