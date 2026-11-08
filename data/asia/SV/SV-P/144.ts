import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スナッチアーム",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の手札を見て、その中からポケモンを1枚選び、相手の山札の下にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761018,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
