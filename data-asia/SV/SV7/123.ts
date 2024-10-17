import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "赤松",
		'zh-cn': "赤松",
		ja: "アカマツ"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇最多2張各不同屬性的基本能量卡，在給對手看過後，其中1張加入手牌，剩餘的能量卡附於自己的寶可夢身上。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇最多2張各不同屬性的基本能量卡，在給對手看過後，其中1張加入手牌，剩餘的能量卡附於自己的寶可夢身上。並且重洗牌庫。",
		ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、相手に見せて、どちらか1枚を手札に加え、残りのエネルギーを自分のポケモンにつける。そして山札を切る。"
	},

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None"
}

export default card