import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マルチつけかえ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のベンチポケモンについているエネルギーを1個、自分のバトルポケモンにつけ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561335,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
