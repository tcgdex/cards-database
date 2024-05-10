import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "サカキのカリスマ",
		'zh-tw': "坂木的領導力"
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。その後、自分の手札からエネルギーを1枚選び、バトルポケモンにつける。",
		'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。然後，從自己的手牌選擇1張能量卡，附於戰鬥寶可夢身上。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card