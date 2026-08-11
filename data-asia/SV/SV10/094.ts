import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のラムダ",
		'zh-tw': "火箭隊的拉姆達",
		'zh-cn': "火箭隊的拉姆達",
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		ja: "自分の山札からトレーナーズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇1張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇1張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821926,
				tcgplayer: 628735,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
