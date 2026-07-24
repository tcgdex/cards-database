import { Card } from "../../../interfaces";
import Set from "../SM5S";

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
				cardmarket: 560018,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
