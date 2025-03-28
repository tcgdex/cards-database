import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シアノ",
		'zh-tw': "席藍",
		'zh-cn': "席藍"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「ポケモンex」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多3張「寶可夢【ex】」卡，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇最多3張「寶可夢【ex】」卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card