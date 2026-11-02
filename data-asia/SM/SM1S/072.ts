import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム図鑑",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分のサイドを数えたあと、すべて山札にもどして切る。その後、山札の上から、もどした枚数ぶんのカードを、サイドとして置く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561749,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
