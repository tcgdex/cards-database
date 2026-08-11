import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "おじょうさま",
		'zh-tw': "千金小姐",
	},

	illustrator: "saino misaki",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある基本エネルギーを4枚まで、相手に見せてから、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多4張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667971,
				tcgplayer: 570027,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
