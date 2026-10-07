import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "うねりの扇",
		'zh-tw': "潮漩之扇"
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについている特殊エネルギーを1個選び、相手の山札の下にもどす。",
		'zh-tw': "選擇1個對手的場上寶可夢身上附加的特殊能量，放回對手的牌庫下方。"
	},

	trainerType: "Item",
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533877, tcgplayer: 569102, cardtrader: 240072 } }
	]
}

export default card