import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スイレン",
	},

	illustrator: "Kanako Eo",
	category: "Trainer",

	effect: {
		'ja-jp': "[水]エネルギーがついている自分のポケモン全員のHPを、それぞれ「50」回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560151,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
