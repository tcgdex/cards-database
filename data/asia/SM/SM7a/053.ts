import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カウンターゲイン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のサイドの残り枚数が、相手より多いなら、このカードをつけているポケモンが使うワザに必要なエネルギーは、エネルギー1個ぶん少なくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558941,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
