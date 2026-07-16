import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "レインボーブラシ",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある基本エネルギーを1枚、自分の場のポケモンについているエネルギー1枚とつけ替え、ついていたエネルギーを山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559046,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
