import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ハンディサーキュレーター",
		'zh-tw': "手持循環扇"
	},

	category: "Trainer",
	rarity: "Uncommon",
	illustrator: "Toyste Beach",

	effect: {
		ja: "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
		'zh-tw': "附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，選擇1個使用招式的寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。"
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card
