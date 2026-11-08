import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マキシマムベルト",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+50」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863993,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "None",
};

export default card;
