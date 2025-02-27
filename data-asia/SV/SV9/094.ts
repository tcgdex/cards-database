import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "アイリスの闘志",
		'zh-tw': "艾莉絲的鬥志",
		'zh-cn': "艾莉絲的鬥志"
	},

	illustrator: "yuu",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。\n\n自分の手札が6枚になるように、山札を引く。",
		'zh-tw': "這張卡必須將自己的1張手牌丟棄才可使用。 從牌庫抽卡直到自己的手牌滿6張為止。",
		'zh-cn': "這張卡必須將自己的1張手牌丟棄才可使用。 從牌庫抽卡直到自己的手牌滿6張為止。"
	},

	trainerType: "Supporter",
	regulationMark: "I"
}

export default card