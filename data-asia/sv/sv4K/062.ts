import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "まけんきチョッキ",
		'zh-tw': "不服輸背心"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードをつけているポケモンが、相手のポケモンから受けるワザのダメージは「-40」される。",
		'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則附有這張卡的寶可夢，受到對手的寶可夢招式的傷害「-40」點。"
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card