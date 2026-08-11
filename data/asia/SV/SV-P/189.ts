import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わざマシンマシン",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から、名前に「ワザマシン」とつく「ポケモンのどうぐ」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793385,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
