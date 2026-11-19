import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ペリーラ",
		'zh-tw': "貝里菈"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の手札が、相手の手札の枚数より1枚多くなるように、山札を引く。",
		'zh-tw': "從牌庫抽卡直到自己手牌的張數比對手手牌的張數多1張為止。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651034,
				tcgplayer: 569821,
				cardtrader: 234204,
			},
		},
	]
}

export default card