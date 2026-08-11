import { Card } from "models/database/card";
import Set from "../SM5p";

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
				cardmarket: 559789,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
