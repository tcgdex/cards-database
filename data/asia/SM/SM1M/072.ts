import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモンいれかえ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561673,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
