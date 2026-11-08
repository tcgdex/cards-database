import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "学習装置",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンが、相手のワザのダメージを受けてきぜつするたび、そのポケモンについていた基本エネルギーを1枚、このカードをつけているポケモンにつけ替えてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561734,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
