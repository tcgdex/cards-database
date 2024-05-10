import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "キハダ",
		'zh-tw': "凰檗"
	},

	illustrator: "yuu",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の手札を1枚選び、山札の下にもどす。その後、自分の手札が5枚になるように、山札を引く。（自分の手札がこのカード1枚だけなら、このカードは使えない。）",
		'zh-tw': "選擇1張自己的手牌，放回牌庫下方。然後，從牌庫抽卡直到自己的手牌滿5張為止。（若自己的手牌只有這1張，則無法使用這張卡。）"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card