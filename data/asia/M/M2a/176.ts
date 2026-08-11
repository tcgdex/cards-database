import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のアテナ",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札が5枚になるように、山札を引く。自分の場のポケモン全員が「ロケット団のポケモン」なら、8枚になるように引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861419,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
