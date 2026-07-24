import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ザオボー",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについている「ポケモンのどうぐ」「特殊エネルギー」と場に出ている「スタジアム」の中から1枚、ロストゾーンに置く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558728,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
