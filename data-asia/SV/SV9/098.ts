import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ハッコウシティ",
		'zh-tw': "釀光市",
		'zh-cn': "釀光市"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のトラッシュから「基本エネルギー」を2枚まで選び、相手に見せて、手札に加えてよい。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從自己的棄牌區選擇最多2張「基本【雷】能量」卡，在給對手看過後加入手牌。",
		'zh-cn': "雙方玩家在每個自己的回合時，可使用1次，可從自己的棄牌區選擇最多2張「基本【雷】能量」卡，在給對手看過後加入手牌。"
	},

	trainerType: "Stadium",
	regulationMark: "I"
}

export default card