import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "奥尔迪加"
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	effect: {
		'zh-cn': "查看对手的手牌，选择其中任意1张卡牌，放回对手的牌库下方。然后，对手若希望，可从牌库上方抽取1张卡牌。 在自己的回合只可以使用1张支援者卡。"
	},
	trainerType: "Supporter",
	regulationMark: "G",
}

export default card
