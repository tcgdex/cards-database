import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホミカの演奏",
	},

	illustrator: "Tomowaka",
	category: "Trainer",

	effect: {
		'ja-jp': "次の相手の番、相手のどくのポケモンは、にげられない。（新しくどくにしたポケモンもふくむ。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877382,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Special illustration rare",
};

export default card;
