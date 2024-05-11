import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "訓練場地",
		ja: "トレーニングコート"
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從自己的棄牌區選擇1張基本能量卡，在給對手看過後加入手牌。",
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のトラッシュから基本エネルギーを1枚選び、相手に見せて、手札に加えてよい。"
	},

	trainerType: "Stadium",
	regulationMark: "D"
}

export default card