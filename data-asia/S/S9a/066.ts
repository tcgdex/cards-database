import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "馬加木",
		ja: "デンボク"
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		'zh-tw': "選擇1張自己的手牌，將剩餘的手牌全部丟棄。然後，從牌庫抽出4張卡。（若自己的手牌只有這1張，則無法使用這張卡。）",
		ja: "自分の手札を1枚選び、残りの手札をすべてトラッシュする。その後、山札を4枚引く。（自分の手札がこのカード1枚だけなら、このカードは使えない。）"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card