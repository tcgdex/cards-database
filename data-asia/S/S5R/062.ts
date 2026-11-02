import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "エネルギーリサイクル",
		'zh-tw': "能量回收器"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを5枚まで選び、相手に見せて、山札にもどして切る。",
		'zh-tw': "從自己的棄牌區選擇最多5張基本能量卡，在給對手看過後放回牌庫並重洗。"
	},

	trainerType: "Item",
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533882, tcgplayer: 569103, cardtrader: 240073 } }
	]
}

export default card