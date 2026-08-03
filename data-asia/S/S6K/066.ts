import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "シャクヤ",
		'zh-tw': "夏科婭",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分のサイドを3枚まで選び、手札に加える。その後、手札から、加えた枚数ぶんのカードを選び、ウラにしてサイドとして置く。",
		'zh-tw': "選擇最多3張自己的獎賞卡加入手牌。然後，從手牌選擇與加入的張數相同數量的卡，反面朝上作為獎賞卡放置。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560854,
				tcgplayer: 569294,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
