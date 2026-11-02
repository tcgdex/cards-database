import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーつけかえ",
	},

	illustrator: "Ken Ikuji",
	category: "Trainer",

	effect: {
		ja: "自分のポケモンについている基本エネルギーを1個、自分の別のポケモンにつけ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559203,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
