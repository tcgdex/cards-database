import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オーキド博士のセッティング",
	},

	illustrator: "Nabana Kensaku",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある、それぞれちがうタイプのたねポケモンを3枚まで、ベンチに出す。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556774,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
