import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "スイレンのつりざお",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュにあるポケモンと「ポケモンのどうぐ」を1枚ずつ、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555229,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
