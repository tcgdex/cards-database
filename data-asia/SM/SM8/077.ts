import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "あとだしハンマー",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		ja: "このカードは、後攻プレイヤーの最初の番しか使えない。相手の場のポケモンについているエネルギーを、1個トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558716,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
