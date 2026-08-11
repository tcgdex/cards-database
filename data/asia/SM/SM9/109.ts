import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナツメの暗示",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の手札を見る。のぞむなら、その中からサポートを1枚選び、そのサポートの効果を、このカードの効果として使う。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558484,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
