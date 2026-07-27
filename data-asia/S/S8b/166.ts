import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "あくの塔",
		'zh-tw': "惡之塔",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札から「いちげき」のカードを1枚トラッシュするなら、自分の山札を2枚引いてよい。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，若從自己的手牌將1張「一擊」卡丟棄，則可從自己的牌庫抽出2張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586682,
				tcgplayer: 571418,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578444,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "None",
};

export default card;
