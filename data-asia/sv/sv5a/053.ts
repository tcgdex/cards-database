import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "アンフェアスタンプ",
		'zh-tw': "不公印章"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。\n\nおたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は5枚、相手は2枚、山札を引く。",
		'zh-tw': "這張卡必須在上個對手的回合自己的寶可夢【昏厥】了才可使用。 雙方玩家各自將手牌全部放回牌庫並重洗。然後，從牌庫抽卡，自己抽出5張，對手抽出2張。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card