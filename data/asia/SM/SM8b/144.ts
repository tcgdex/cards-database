import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テンガン山",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番に1回、自分のトラッシュにある[鋼]エネルギーを2枚、相手に見せてから、手札に加えてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551216,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "None",
};

export default card;
