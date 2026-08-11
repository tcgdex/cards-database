import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルザミーネ",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにあるサポートとスタジアムを合計2枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560142,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
