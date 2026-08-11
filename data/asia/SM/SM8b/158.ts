import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ラジュルネ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のバトル場に2進化ポケモンがいなければ使えない。自分の山札にある好きなカードを2枚まで、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551286,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
