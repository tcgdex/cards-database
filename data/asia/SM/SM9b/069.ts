import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テンガン山",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番に1回、自分のトラッシュにある[鋼]エネルギーを2枚、相手に見せてから、手札に加えてよい。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558187,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "B",
	rarity: "Secret Rare",
};

export default card;
