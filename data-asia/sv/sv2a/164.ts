import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マサキの転送",
		'zh-tw': "正輝的輸送"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から8枚見て、その中からポケモンを好きなだけ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
		'zh-tw': "查看自己的牌庫上方8張卡，從其中選擇任意數量的寶可夢卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card