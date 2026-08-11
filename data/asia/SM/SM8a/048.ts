import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンジャラスドリル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札にある[悪]ポケモンを1枚トラッシュしなければ使えない。相手の場のポケモンについている「ポケモンのどうぐ」「特殊エネルギー」と場に出ている「スタジアム」の中から、1枚トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558622,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
