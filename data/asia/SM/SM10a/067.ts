import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タッグスイッチ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のTAG TEAMのポケモン1匹についているエネルギーを2個まで、自分の別のポケモン1匹につけ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557346,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
