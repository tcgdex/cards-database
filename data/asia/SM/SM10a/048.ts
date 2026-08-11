import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギーマ",
	},

	illustrator: "kodama",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の場のポケモン1匹にのっているダメカンを3個まで、相手の別のポケモン1匹にのせ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557327,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
