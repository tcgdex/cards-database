import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭隊的阿波羅",
		'zh-cn': "火箭隊的阿波羅",
		ja: "ロケット団のアポロ"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須在上個對手的回合自己的「火箭隊的寶可夢」【昏厥】了才可使用。 雙方玩家各將手牌全部放回牌庫並重洗。然後，從牌庫抽卡，自己抽出5張，對手抽出3張。",
		'zh-cn': "這張卡必須在上個對手的回合自己的「火箭隊的寶可夢」【昏厥】了才可使用。 雙方玩家各將手牌全部放回牌庫並重洗。然後，從牌庫抽卡，自己抽出5張，對手抽出3張。",
		ja: "このカードは、前の相手の番に、自分の「ロケット団のポケモン」がきぜつしていなければ使えない。\n\nおたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は5枚、相手は3枚、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card