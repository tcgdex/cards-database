import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ザオボー",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の場のポケモンについている「ポケモンのどうぐ」「特殊エネルギー」と場に出ている「スタジアム」の中から1枚、ロストゾーンに置く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544386,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "None",
};

export default card;
