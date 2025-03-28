import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "玻璃喇叭",
		'zh-cn': "玻璃喇叭",
		ja: "ガラスのラッパ"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡只有在自己的場上有「太晶」寶可夢時才可使用。 選擇最多2隻自己的備戰區的【無】寶可夢，從棄牌區附給那些寶可夢各1張基本能量卡。",
		'zh-cn': "這張卡只有在自己的場上有「太晶」寶可夢時才可使用。 選擇最多2隻自己的備戰區的【無】寶可夢，從棄牌區附給那些寶可夢各1張基本能量卡。",
		ja: "このカードは、自分の場に「テラスタル」のポケモンがいるときにしか使えない。\n\n自分のベンチのポケモンを2匹まで選び、トラッシュから基本エネルギーを1枚ずつつける。"
	},

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card