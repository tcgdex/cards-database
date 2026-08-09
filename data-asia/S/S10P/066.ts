import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "タイサイ",
		'zh-tw': "曉白",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の手札をオモテにして、おたがいに見せ合う。自分の山札を3枚引く。",
		'zh-tw': "雙方玩家各將自己的手牌翻到正面後，雙方互看。從自己的牌庫抽出3張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651125,
				tcgplayer: 569909,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
