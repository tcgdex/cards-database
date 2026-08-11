import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のファクトリー",
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		'ja-jp': "この番に、手札から、名前に「ロケット団」とつくサポートを出して使っていたプレイヤーは、自分の番ごとに1回、自分の山札を2枚引いてよい。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861433,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "None",
};

export default card;
