import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リーリエ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札が6枚になるように、山札を引く。最初の自分の番に使ったなら、8枚になるように引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561660,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
