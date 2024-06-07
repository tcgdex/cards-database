import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪俐",
		ja: "マリィ"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家各將自己的手牌全部翻回反面並重洗，放回牌庫下方。然後，從牌庫抽卡，自己抽出5張，對手抽出4張。",
		ja: "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、自分は5枚、相手は4枚、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "D"
}

export default card