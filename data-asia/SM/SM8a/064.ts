import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "デンジャラスドリル",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札にある[悪]ポケモンを1枚トラッシュしなければ使えない。相手の場のポケモンについている「ポケモンのどうぐ」「特殊エネルギー」と場に出ている「スタジアム」の中から、1枚トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558638,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
