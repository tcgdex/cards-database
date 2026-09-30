import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "招式学习器 暗中奇袭"
	},
	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	effect: {
		'zh-cn': "身上放有这张卡牌的宝可梦，可以使用这张卡牌上的招式。[需要满足使用招式所需能量。]\n放于宝可梦身上的这张卡牌，将在自己的回合结束时被放于弃牌区。 ●●●   暗中奇袭 给身上放置有伤害指示物的1只对手的宝可梦，造成100伤害。[备战宝可梦不计算弱点、抗性。] 在自己的回合可以将任意张宝可梦道具卡，放于自己的宝可梦身上。每只宝可梦身上只可以放1张宝可梦道具卡，并保持附加状态。"
	},
	trainerType: "Tool",
	regulationMark: "G",
}

export default card
