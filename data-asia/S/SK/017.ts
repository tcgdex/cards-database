import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "普通釣竿",
		ja: "ふつうのつりざお"
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的棄牌區選擇最多2張寶可夢卡與最多2張基本能量卡，在給對手看過後放回牌庫並重洗。（可只選擇寶可夢卡或者只選擇基本能量卡。）",
		ja: "自分のトラッシュからポケモンを2枚までと、基本エネルギーを2枚まで選び、相手に見せて、山札にもどして切る。（ポケモンまたは基本エネルギーのどちらかだけでもよい。）"
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card