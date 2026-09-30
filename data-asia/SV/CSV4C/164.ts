import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "豪华斗篷"
	},
	illustrator: "Toyste Beach",
	rarity: "Hyper rare",
	category: "Trainer",
	set: Set,
	effect: {
		'zh-cn': "身上放有这张卡牌的宝可梦（除「拥有规则的宝可梦」外）的最大HP「+100」，当该宝可梦，受到对手宝可梦的招式的伤害而【昏厥】时，对手拿取的奖赏卡将增加1张。 在自己的回合可以将任意张宝可梦道具卡，放于自己的宝可梦身上。每只宝可梦身上只可以放1张宝可梦道具卡，并保持附加状态。"
	},
	trainerType: "Tool",
	regulationMark: "G",
}

export default card
