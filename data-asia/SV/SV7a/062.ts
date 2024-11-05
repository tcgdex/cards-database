import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "朵拉塞娜",
		'zh-cn': "朵拉塞娜",
		ja: "ドラセナ"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，擲1次硬幣，若為正面，則從牌庫抽出8張卡，若為反面，則從牌庫抽出3張卡。",
		'zh-cn': "將自己的手牌全部放回牌庫並重洗。然後，擲1次硬幣，若為正面，則從牌庫抽出8張卡，若為反面，則從牌庫抽出3張卡。",
		ja: "自分の手札をすべて山札にもどして切る。その後、コインを1回投げ、オモテなら8枚、ウラなら3枚、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Common"
}

export default card