import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハプウ",
	},

	illustrator: "Ryota Murayama",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から6枚見て、その中にあるカードを2枚、手札に加える。残りのカードはトラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544516,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
