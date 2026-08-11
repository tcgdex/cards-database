import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "カゲツ",
		'zh-tw': "花月",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中から「ポケモンのどうぐ」「スタジアム」「特殊エネルギー」を2枚まで選び、トラッシュする。",
		'zh-tw': "查看對手的手牌，從其中選擇最多2張「寶可夢道具」「競技場」「特殊能量」卡，將其丟棄。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575650,
				tcgplayer: 569596,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
