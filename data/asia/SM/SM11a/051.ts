import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーつけかえ",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分のポケモンについている基本エネルギーを1個、自分の別のポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556717,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Uncommon",
};

export default card;
