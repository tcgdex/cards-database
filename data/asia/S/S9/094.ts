import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑連的關心",
		'ja-jp': "チェレンの気くばり"
	},

	illustrator: "Yusuke Ohmura",
	category: "Trainer",

	effect: {
		'zh-tw': "選擇1隻自己的身上放置有傷害指示物的【無】寶可夢，將那隻寶可夢與附加的卡，全部放回手牌。",
		'ja-jp': "ダメカンがのっている自分のポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605945,
				tcgplayer: 569722,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card