import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "祝慶村",
		ja: "コトブキムラ"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可將自己的手牌全部放回牌庫並重洗。這個情況下，從自己的牌庫抽出5張卡。若使用了這個效果，則自己的回合結束。",
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札をすべて山札にもどして切ってよい。その場合、自分の山札を5枚引く。この効果を使ったなら、自分の番は終わる。"
	},

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card