import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "学習装置",
		'zh-tw': "學習裝置"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、そのポケモンについている基本エネルギーを1枚選び、このカードをつけているポケモンにつけ替えてよい。",
		'zh-tw': "每次當自己的戰鬥寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，可選擇1張那隻寶可夢身上附加的基本能量卡，改附於附有這張卡的寶可夢身上。"
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card