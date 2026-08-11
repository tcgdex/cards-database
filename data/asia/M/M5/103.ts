import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーつけかえ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888648,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
