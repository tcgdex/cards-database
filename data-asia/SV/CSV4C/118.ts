import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "不服输背心"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	effect: {
		'zh-cn': "如果自己的剩余奖赏卡张数，比对手的剩余奖赏卡张数多的话，则身上放有这张卡牌的宝可梦，受到对手宝可梦的招式的伤害「-40」。 在自己的回合可以将任意张宝可梦道具卡，放于自己的宝可梦身上。每只宝可梦身上只可以放1张宝可梦道具卡，并保持附加状态。"
	},
	trainerType: "Tool",
	regulationMark: "G",
}

export default card
