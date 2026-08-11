import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リーリエ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札が6枚になるように、山札を引く。最初の自分の番に使ったなら、8枚になるように引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559053,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
