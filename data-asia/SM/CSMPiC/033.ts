import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "碧蓝的探索",
	},
	rarity: "None",
	illustrator: "Naoki Saito",
	category: "Trainer",
	effect: {
		'zh-cn': "这张卡只有在自己的场上没有拥有特性的宝可梦时才可使用。从自己的牌库选择最多2张训练家卡，给对手看过后加入手牌。并且重洗牌库。",
	},
	trainerType: "Supporter",
	variants: [{ type: "holo" }],
}

export default card
