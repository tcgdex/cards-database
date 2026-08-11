import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユウリ",
		'zh-tw': "小優",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札からたねポケモン（「ルールを持つポケモン」をのぞく）を3枚まで選び、ベンチに出す。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多3張【基礎】寶可夢卡（「擁有規則的寶可夢」除外），放置於備戰區。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586679,
				tcgplayer: 571415,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578441,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
