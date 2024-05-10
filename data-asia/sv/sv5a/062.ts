import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴヨウ",
		'zh-tw': "悟松"
	},

	illustrator: "hncl",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、おたがいのプレイヤーは、それぞれコインを1回投げ、オモテなら6枚、ウラなら3枚、山札を引く。",
		'zh-tw': "雙方玩家各將自己的手牌全部翻回反面並重洗，放回牌庫下方。然後，雙方玩家各擲1次硬幣，若為正面，則從牌庫抽出6張卡，若為反面，則從牌庫抽出3張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card