import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サイクリングロード",
		'zh-tw': "自行車道"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札から基本エネルギーを1枚トラッシュするなら、自分の山札を1枚引いてよい。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，若從自己的手牌將1張基本能量卡丟棄，則可從自己的牌庫抽出1張卡。"
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card