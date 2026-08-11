import { Card } from "models/database/card";
import Set from "../MC";

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
				cardmarket: 863972,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
