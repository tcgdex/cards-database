import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のアポロ",
		'zh-tw': "火箭隊的阿波羅",
		'zh-cn': "火箭隊的阿波羅",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分の「ロケット団のポケモン」がきぜつしていなければ使えない。おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は5枚、相手は3枚、山札を引く。",
		'zh-tw': "這張卡必須在上個對手的回合自己的「火箭隊的寶可夢」【昏厥】了才可使用。 雙方玩家各將手牌全部放回牌庫並重洗。然後，從牌庫抽卡，自己抽出5張，對手抽出3張。",
		'zh-cn': "這張卡必須在上個對手的回合自己的「火箭隊的寶可夢」【昏厥】了才可使用。 雙方玩家各將手牌全部放回牌庫並重洗。然後，從牌庫抽卡，自己抽出5張，對手抽出3張。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821924,
				tcgplayer: 628733,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
