import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "大地の器",
		'zh-tw': "大地之容器"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。\n\n自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡必須將自己的1張手牌丟棄才可使用。 從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card