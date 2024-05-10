import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴージャスマント",
		'zh-tw': "豪華斗篷"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモン（「ルールを持つポケモン」をのぞく）の最大HPは「＋100」され、そのポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、とられるサイドは1枚多くなる。",
		'zh-tw': "附有這張卡的寶可夢（「擁有規則的寶可夢」除外）的最大HP「+100」，那隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，被獲得的獎賞卡的張數增加1張。"
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card