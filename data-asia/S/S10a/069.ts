import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒナツ",
		'zh-tw': "火夏",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分の山札から進化ポケモン（「ルールを持つポケモン」をのぞく）を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多3張進化寶可夢卡（「擁有規則的寶可夢」除外），在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656393,
				tcgplayer: 570732,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577136,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
