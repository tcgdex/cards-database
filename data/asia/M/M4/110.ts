import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホミカの演奏",
	},

	illustrator: "Nobusawa/Mochipuyo",
	category: "Trainer",

	effect: {
		'ja-jp': "次の相手の番、相手のどくのポケモンは、にげられない。（新しくどくにしたポケモンもふくむ。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877365,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
