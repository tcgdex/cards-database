import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボウルタウン",
		'zh-tw': "深缽鎮"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札からたねポケモン（「ルールを持つポケモン」をのぞく）を1枚選び、ベンチに出してよい。そして山札を切る。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從自己的牌庫選擇1張【基礎】寶可夢卡（「擁有規則的寶可夢」除外），放置於備戰區。並且重洗牌庫。"
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card