import { Card } from "models/database/card";
import Set from "../SM2p";

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
				cardmarket: 561302,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
