import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "濱名的後援",
		ja: "ハマナのバックアップ"
	},

	illustrator: "Nagomi Nijo",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的棄牌區選擇「寶可夢」卡與「寶可夢道具」卡與「競技場」卡與「能量」卡最多各1張，在給對手看過後放回牌庫並重洗。",
		ja: "自分のトラッシュから「ポケモン」と「ポケモンのどうぐ」と「スタジアム」と「エネルギー」を、それぞれ1枚まで選び、相手に見せて、山札にもどして切る。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card