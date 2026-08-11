import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミツルの思いやり",
	},

	illustrator: "Iori Suzuki",
	category: "Trainer",

	effect: {
		ja: "自分の「メガシンカex」1匹のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべて手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 871042,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
