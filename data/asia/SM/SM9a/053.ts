import { Card } from "models/database/card";
import Set from "../SM9a";

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
			type: "holo",
			thirdParty: {
				cardmarket: 558240,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
