import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "スイレンのお世話",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモン（「ルールを持つポケモン」をのぞく）と基本エネルギーを合計3枚まで選び、相手に見せて、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864014,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
