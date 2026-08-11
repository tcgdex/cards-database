import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "冒険家の発見",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「ポケモンV」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587065,
				tcgplayer: 571518,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
