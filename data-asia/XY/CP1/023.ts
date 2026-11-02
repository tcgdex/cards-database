import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のスーパーボール",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「アクア団」のたねポケモンと基本[水]エネルギーをそれぞれ1枚ずつ選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563743,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
