import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "マコモ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "自分のポケモン全員のHPを、それぞれ「40」回復する。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{ type: "holo" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 829426,
		tcgplayer: 636520,
	},
};

export default card;
