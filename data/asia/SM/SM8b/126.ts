import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フェアリーチャーム UB",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、相手の「ウルトラビースト」の「ポケモンGX・EX」からワザのダメージを受けない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551126,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
