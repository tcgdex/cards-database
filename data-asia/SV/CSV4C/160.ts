import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "阳伞姐姐"
	},
	illustrator: "En Morikura",
	rarity: "Special illustration rare",
	category: "Trainer",
	set: Set,
	effect: {
		'zh-cn': "将自己的手牌全部放回牌库并重洗牌库。然后，从牌库上方抽取4张卡牌。如果是后攻玩家的最初回合的话，则抽取的卡牌张数变为8张。 在自己的回合只可以使用1张支援者卡。"
	},
	trainerType: "Supporter",
	regulationMark: "G",
}

export default card
