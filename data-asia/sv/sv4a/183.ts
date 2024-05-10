import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "タウンデパート",
		'zh-tw': "城鎮百貨公司"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加えてよい。そして山札を切る。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從自己的牌庫選擇1張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card