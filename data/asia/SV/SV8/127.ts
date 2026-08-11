import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "シアノ",
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「ポケモンex」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793592,
				tcgplayer: 587696,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
