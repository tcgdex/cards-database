import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "溶接工",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札にある[炎]エネルギーを2枚まで、自分のポケモン1匹につける。その後、自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557445,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
