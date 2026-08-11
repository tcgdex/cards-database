import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムク",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札からポケモン（「ルールを持つポケモン」をのぞく）を2枚までトラッシュし、その枚数×3枚ぶん、山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888662,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Special illustration rare",
};

export default card;
