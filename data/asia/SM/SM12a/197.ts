import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホミカの演奏",
	},

	illustrator: "Jumpei Akasaka",
	category: "Trainer",

	effect: {
		'ja-jp': "次の相手の番、相手のどくのポケモンは、にげられない。（新しくどくにしたポケモンもふくむ。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544526,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
