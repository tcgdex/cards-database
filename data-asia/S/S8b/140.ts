import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "やまびこホーン",
		'zh-tw': "山谷回音喇叭",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "相手のトラッシュからたねポケモンを1枚選び、相手のベンチに出す。",
		'zh-tw': "從對手的棄牌區選擇1張【基礎】寶可夢卡，放置於對手的備戰區。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586656,
				tcgplayer: 571393,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578421,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
