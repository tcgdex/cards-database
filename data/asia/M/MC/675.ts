import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のレシーバー",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から、名前に「ロケット団」とつくサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863977,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
