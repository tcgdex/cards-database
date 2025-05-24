import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジャッジマン",
		'zh-tw': "裁判",
		'zh-cn': "裁判"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。",
		'zh-tw': "雙方玩家各自將手牌全部放回牌庫並重洗。然後，各從牌庫抽出4張。",
		'zh-cn': "雙方玩家各自將手牌全部放回牌庫並重洗。然後，各從牌庫抽出4張。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card