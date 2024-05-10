import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "まけんきハチマキ",
		'zh-tw': "不服輸頭帶"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
		'zh-tw': "若自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多，則附有這張卡的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。"
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card