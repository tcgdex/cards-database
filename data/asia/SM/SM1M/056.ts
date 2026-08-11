import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモンいれかえ",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561657,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
