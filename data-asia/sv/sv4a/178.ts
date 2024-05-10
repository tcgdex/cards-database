import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデアの学生",
		'zh-tw': "帕底亞的學生"
	},

	illustrator: "Cona Nitanda",
	category: "Trainer",

	effect: {
		ja: "自分の山札からポケモン（「ルールを持つポケモン」をのぞく）を1枚選び、相手に見せて、手札に加える。そして山札を切る。手札に加えられるポケモンの枚数は、自分のトラッシュにある「パルデアの学生」（このカードをのぞく）の枚数ぶん多くなる。",
		'zh-tw': "從自己的牌庫選擇1張寶可夢卡（「擁有規則的寶可夢」除外），在給對手看過後加入手牌。並且重洗牌庫。可加入手牌的寶可夢卡的張數增加與自己的棄牌區的「帕底亞的學生」（這張卡除外）的張數相同數量。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card