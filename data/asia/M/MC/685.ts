import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナモのみ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、相手の[D]ポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863987,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "None",
};

export default card;
