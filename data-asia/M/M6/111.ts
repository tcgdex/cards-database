import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ギリー",
	},

	illustrator: "Shimaris Yukichi",
	category: "Trainer",

	effect: {
		ja: "自分の山札からサポートとスタジアムを合計3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900144,
				tcgplayer: 709265,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
};

export default card;
