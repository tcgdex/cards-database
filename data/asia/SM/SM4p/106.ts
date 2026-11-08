import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スイレン",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "[水]エネルギーがついている自分のポケモン全員のHPを、それぞれ「50」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560139,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
