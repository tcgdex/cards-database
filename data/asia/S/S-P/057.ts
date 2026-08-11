import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンごっこ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463194,
				tcgplayer: 597276,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
