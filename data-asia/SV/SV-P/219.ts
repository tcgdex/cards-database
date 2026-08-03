import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "カイ",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		ja: "自分の山札から[W]ポケモンとグッズをそれぞれ1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 687685,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Promo",
};

export default card;
