import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "スクランブルスイッチ",
		'zh-tw': "急進開關",
		'zh-cn': "急進開關"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、ベンチに入れ替えたポケモンについているエネルギーを好きなだけ選び、新しいバトルポケモンにつけ替える。",
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。然後，選擇換入備戰區的寶可夢身上附加的任意數量的能量卡，改附於新的戰鬥寶可夢身上。",
		'zh-cn': "將自己的戰鬥寶可夢與備戰寶可夢互換。然後，選擇換入備戰區的寶可夢身上附加的任意數量的能量卡，改附於新的戰鬥寶可夢身上。"
	},

	trainerType: "Item",
	rarity: "None",
	regulationMark: "H"
}

export default card