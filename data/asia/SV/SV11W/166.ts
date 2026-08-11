import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "トウコ",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		ja: "自分の山札から進化ポケモンとエネルギーを1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [
		{
			type: "holo",
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",
	thirdParty: {
		cardmarket: 829525,
		tcgplayer: 636719,
	},
};

export default card;
