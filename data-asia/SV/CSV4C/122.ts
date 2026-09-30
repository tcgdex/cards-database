import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "辛俐"
	},
	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	effect: {
		'zh-cn': "查看自己牌库上方4张卡牌，选择其中2张卡牌，加入手牌。将剩余的卡牌全部翻到反面重洗，放回牌库下方。 在自己的回合只可以使用1张支援者卡。"
	},
	trainerType: "Supporter",
	regulationMark: "G",
}

export default card
