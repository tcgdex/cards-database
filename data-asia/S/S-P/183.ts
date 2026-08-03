import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モミ",
		'zh-tw': "小火龍",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の進化ポケモン全員のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 570878,
				tcgplayer: 597381,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
