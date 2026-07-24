import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ラジュルネ",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のバトル場に2進化ポケモンがいなければ使えない。自分の山札にある好きなカードを2枚まで、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551186,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
