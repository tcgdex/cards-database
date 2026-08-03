import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイのヘビーボール",
		'zh-tw': "洗翠的沉重球",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "ウラになっている自分のサイドのオモテをすべて見る。その中からたねポケモンを1枚選び、相手に見せて、この「ヒスイのヘビーボール」と入れ替えて、手札に加える。見たサイドや入れ替えたカードはすべてウラにして切り、サイドとして置く。",
		'zh-tw': "查看自己的所有反面朝上的獎賞卡的正面。從其中選擇1張【基礎】寶可夢卡，在給對手看過後，與這張「洗翠的沉重球」卡互換並加入手牌。將看過的獎賞卡與換入的卡全部翻回反面並重洗，作為獎賞卡放置。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651121,
				tcgplayer: 569905,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
