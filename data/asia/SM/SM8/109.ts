import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "あとだしハンマー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、後攻プレイヤーの最初の番しか使えない。相手の場のポケモンについているエネルギーを、1個トラッシュする。",
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
