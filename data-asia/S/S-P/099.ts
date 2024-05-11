import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "機器鶘"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須從自己的手牌將1張物品卡丟棄才可使用。擲1次硬幣若為正面，則從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "E"
}

export default card