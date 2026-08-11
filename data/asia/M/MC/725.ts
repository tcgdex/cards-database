import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マコモ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモン全員のHPを、それぞれ「40」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864027,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
