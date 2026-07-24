import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "グレートポーション",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		ja: "自分のバトル場の「ポケモンGX」のHPを「50」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557043,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
