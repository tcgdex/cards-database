import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "レベルボール",
		'zh-tw': "等級球"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「90」以下のポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇1張HP為「90」以下的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533887, tcgplayer: 569104, cardtrader: 240074 } }
	]
}

export default card