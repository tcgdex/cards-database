import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "ツールジャマー",
		'zh-tw': "道具妨礙器"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンがバトル場にいるかぎり、相手のバトルポケモンについている「ポケモンのどうぐ」（「ツールジャマー」をのぞく）の効果は、すべてなくなる。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。"
	},

	trainerType: "Tool",
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533892, tcgplayer: 569105, cardtrader: 240075 } }
	]
}

export default card