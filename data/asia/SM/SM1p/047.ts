import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マルチつけかえ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のベンチポケモンについているエネルギーを1個、自分のバトルポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561575,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
