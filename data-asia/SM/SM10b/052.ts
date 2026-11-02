import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "グラジオ",
	},

	illustrator: "Mana Ibe",
	category: "Trainer",

	effect: {
		ja: "ウラになっている自分のサイドのオモテをすべて見て、その中にあるカードを1枚、この「グラジオ」と入れ替えて、手札に加える。その後、この「グラジオ」と残りのサイドをすべてウラにして切り、サイドとして置く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557254,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
