import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロトム図鑑",
	},

	illustrator: "aky CG Works",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のサイドを数えたあと、すべて山札にもどして切る。その後、山札の上から、もどした枚数ぶんのカードを、サイドとして置く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557332,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
