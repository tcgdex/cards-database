import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レインボーブラシ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある基本エネルギーを1枚、自分の場のポケモンについているエネルギー1枚とつけ替え、ついていたエネルギーを山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559072,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
