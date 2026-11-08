import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "きらめく結晶",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている「テラスタル」のポケモンがワザを使うとき、そのワザを使うためのエネルギーは、1個ぶん少なくなる。（少なくなるのは、どのタイプのエネルギーでもよい。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863982,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "None",
};

export default card;
