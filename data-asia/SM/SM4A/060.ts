import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ねがいのバトン",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、バトル場で相手のワザのダメージを受けてきぜつしたとき、そのポケモンについている基本エネルギーを3枚まで、自分のベンチポケモン1匹につけ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560308,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
