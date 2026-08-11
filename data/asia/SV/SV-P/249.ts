import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "からておうの稽古",
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		'ja-jp': "この番、自分のポケモンが使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+40」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 838363,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
