import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "あとだしハンマー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードは、後攻プレイヤーの最初の番しか使えない。相手の場のポケモンについているエネルギーを、1個トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558748,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
