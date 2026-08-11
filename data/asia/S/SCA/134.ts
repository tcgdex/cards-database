import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捕獲能量"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 當從手牌將這張卡附於寶可夢身上時，從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
	},

	energyType: "Special",
	regulationMark: "D"
}

export default card