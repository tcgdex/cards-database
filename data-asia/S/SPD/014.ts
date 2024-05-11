import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "克拉拉",
		ja: "クララ"
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的棄牌區選擇最多2張寶可夢卡與最多2張基本能量卡，在給對手看過後加入手牌。（可只選擇寶可夢卡或者只選擇基本能量卡。）",
		ja: "自分のトラッシュからポケモンを2枚までと、基本エネルギーを2枚まで選び、相手に見せて、手札に加える。（ポケモンまたは基本エネルギーのどちらかだけでもよい。）"
	},

	trainerType: "Supporter",
	regulationMark: "E"
}

export default card