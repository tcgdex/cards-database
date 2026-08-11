import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルザミーネ",
	},

	illustrator: "You Iribi",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにあるサポートとスタジアムを合計2枚、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560153,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
