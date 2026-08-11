import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のファクトリー",
		'zh-tw': "火箭隊的工廠",
		'zh-cn': "火箭隊的工廠",
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		ja: "この番に、手札から、名前に「ロケット団」とつくサポートを出して使っていたプレイヤーは、自分の番ごとに1回、自分の山札を2枚引いてよい。",
		'zh-tw': "在每個自己的回合時，可使用1次。在這個回合從手牌使出了名稱中有「火箭隊」的支援者卡的玩家，可從自己的牌庫抽出2張卡。",
		'zh-cn': "在每個自己的回合時，可使用1次。在這個回合從手牌使出了名稱中有「火箭隊」的支援者卡的玩家，可從自己的牌庫抽出2張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821929,
				tcgplayer: 628738,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
