import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アクアディフューザー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている「アクア団」のポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］",
	},

	attacks: [
		{
			name: { ja: "アクアディフューザー" },
			cost: ["Water"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくとこんらんにする。",
			},
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563745,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
