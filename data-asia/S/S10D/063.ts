import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "フェザーボール",
		'zh-tw': "飛羽球"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、にげるためのエネルギーがないポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇1張沒有【撤退】所需的能量的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651031,
				tcgplayer: 569818,
				cardtrader: 234201,
			},
		},
	]
}

export default card