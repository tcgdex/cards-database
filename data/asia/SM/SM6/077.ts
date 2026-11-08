import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "化石発掘マップ",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札またはトラッシュのどちらかを選ぶ。その中にある「なぞの化石」を1枚、相手に見せてから、手札に加える。山札を見たなら、山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559622,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
