import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "はげましのてがみ",
		'zh-tw': "勉勵的信"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。\n\n自分の山札から基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡必須在上個對手的回合自己的寶可夢【昏厥】了才可使用。 從自己的牌庫選擇最多3張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card