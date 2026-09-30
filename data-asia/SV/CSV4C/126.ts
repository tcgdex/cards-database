import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "蕾荷"
	},
	illustrator: "hncl",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	effect: {
		'zh-cn': "查看自己牌库上方5张卡牌，选择其中任意数量的卡牌，放于弃牌区。将剩余的卡牌以任意顺序重新排列，放回牌库上方。 在自己的回合只可以使用1张支援者卡。"
	},
	trainerType: "Supporter",
	regulationMark: "G",
}

export default card
