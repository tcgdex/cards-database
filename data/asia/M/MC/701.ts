import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Nの筋書き",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のベンチポケモンについているエネルギーを2個まで選び、バトルポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864003,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
