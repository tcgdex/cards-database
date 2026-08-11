import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ねがいのバトン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、バトル場で相手のワザのダメージを受けてきぜつしたとき、そのポケモンについている基本エネルギーを3枚まで、自分のベンチポケモン1匹につけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551121,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
