import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウツギ博士のレクチャー",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある、HPが「60」以下のポケモンを3枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555034,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
