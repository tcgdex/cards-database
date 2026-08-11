import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "かいじゅうマニア",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にあるにげるためのエネルギーが4個のポケモンを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557249,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
