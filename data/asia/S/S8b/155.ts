import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "とりつかい",
		'zh-tw': "養鳥人",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、自分の山札を3枚引く。",
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。然後，從自己的牌庫抽出3張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586671,
				tcgplayer: 571408,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578435,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "None",
};

export default card;
