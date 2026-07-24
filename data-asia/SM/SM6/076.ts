import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "エネポーター",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについている特殊エネルギーを1個、相手の別のポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559621,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
