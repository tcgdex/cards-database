import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "火打石",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札にある[炎]エネルギーを4枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559401,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
