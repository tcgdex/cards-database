import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "のんびりじゃらし",
		'zh-tw': "悠哉尾草棒",
		'zh-cn': "悠哉尾草棒"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、後攻プレイヤーの最初の番しか使えない。\n\n相手の場のポケモンについているエネルギーを1個選び、相手の手札にもどす。",
		'zh-tw': "這張卡只可在後攻玩家的最初回合使用。 選擇1個對手的場上寶可夢身上附加的能量，放回對手的手牌。",
		'zh-cn': "這張卡只可在後攻玩家的最初回合使用。 選擇1個對手的場上寶可夢身上附加的能量，放回對手的手牌。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card