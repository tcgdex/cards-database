import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロトム図鑑",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のサイドを数えたあと、すべて山札にもどして切る。その後、山札の上から、もどした枚数ぶんのカードを、サイドとして置く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560131,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
