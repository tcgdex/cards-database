import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ラベン博士",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから、名前に「ヒスイ」とつくポケモンを3枚まで選び、相手に見せて、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650956,
				tcgplayer: 597457,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Promo",
};

export default card;
