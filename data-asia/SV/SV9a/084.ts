import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキの冒険",
		'zh-tw': "阿響的冒險",
		'zh-cn': "阿響的冒險"
	},

	illustrator: "Iori Suzuki",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「ヒビキのポケモン」と「基本エネルギー」を合計3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇「阿響的寶可夢」與「基本【火】能量」卡合計最多3張，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇「阿響的寶可夢」與「基本【火】能量」卡合計最多3張，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Supporter",
	regulationMark: "I"
}

export default card