import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "釣り人",
	},

	illustrator: "Masakazu Fukuda",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを4枚選び、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559050,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
