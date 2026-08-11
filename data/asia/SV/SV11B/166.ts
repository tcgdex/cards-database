import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マコモ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモン全員のHPを、それぞれ「40」回復する。 サポートは、自分の番に1枚しか使えない。",
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
