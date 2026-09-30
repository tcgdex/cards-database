import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "招式学习器 能量涡轮"
	},
	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	effect: {
		'zh-cn': "身上放有这张卡牌的宝可梦，可以使用这张卡牌上的招式。[需要满足使用招式所需能量。]\n放于宝可梦身上的这张卡牌，将在自己的回合结束时被放于弃牌区。 ● 能量涡轮 选择自己牌库中最多2张基本能量，以任意方式附着于备战宝可梦身上。并重洗牌库。 在自己的回合可以将任意张宝可梦道具卡，放于自己的宝可梦身上。每只宝可梦身上只可以放1张宝可梦道具卡，并保持附加状态。"
	},
	trainerType: "Tool",
	regulationMark: "G",
}

export default card
