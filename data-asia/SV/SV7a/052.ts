import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "能量輸送PRO",
		'zh-cn': "能量輸送PRO",
		ja: "エネルギー転送PRO"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇任意數量的各不同屬性的基本能量卡各1張，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇任意數量的各不同屬性的基本能量卡各1張，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを好きなだけ選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",

	thirdParty: {
		cardmarket: 787612
	}
}

export default card