import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "改造ハンマー",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のポケモンについている特殊エネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561572,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
