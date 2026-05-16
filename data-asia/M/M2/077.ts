import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒカリ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「たねポケモン」「1進化ポケモン」「2進化ポケモン」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 850585,
		tcgplayer: 655856,
	},
};

export default card;