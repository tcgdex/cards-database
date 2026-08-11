import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "あなあけスコップ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から2枚トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839225,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
