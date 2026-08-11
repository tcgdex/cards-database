import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "夜のタンカ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821711,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
