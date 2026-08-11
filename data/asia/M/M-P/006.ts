import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カウンターゲイン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードをつけているポケモンがワザを使うためのエネルギーは、エネルギー1個ぶん少なくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839228,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
