import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "裁判",
		ja: "ジャッジマン"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家各將手牌全部放回牌庫並重洗。然後，各從牌庫抽出4張。",
		ja: "おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。"
	},

	trainerType: "Supporter",
	regulationMark: "E"
}

export default card