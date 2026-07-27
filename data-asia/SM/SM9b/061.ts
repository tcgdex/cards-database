import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブルーの探索",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の場に特性を持つポケモンがいるなら、使えない。自分の山札にあるトレーナ−ズを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558179,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
