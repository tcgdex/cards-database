import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "グラジオ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "ウラになっている自分のサイドのオモテをすべて見て、その中にあるカードを1枚、この「グラジオ」と入れ替えて、手札に加える。その後、この「グラジオ」と残りのサイドをすべてウラにして切り、サイドとして置く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560362,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
