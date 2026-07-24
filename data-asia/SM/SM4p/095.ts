import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "マルチつけかえ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のベンチポケモンについているエネルギーを1個、自分のバトルポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560128,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
