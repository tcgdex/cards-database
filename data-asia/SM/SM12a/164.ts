import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "テンガン山",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番に1回、自分のトラッシュにある[鋼]エネルギーを2枚、相手に見せてから、手札に加えてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544456,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "B",
	rarity: "None",
};

export default card;
