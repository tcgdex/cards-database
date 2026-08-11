import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モミ",
		'zh-tw': "芽米",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の進化ポケモン全員のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。",
		'zh-tw': "將自己的所有進化寶可夢的HP全部恢復。然後，將恢復的寶可夢身上附加的能量全部丟棄。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586678,
				tcgplayer: 571414,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578440,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
