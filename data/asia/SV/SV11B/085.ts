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

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 828657,
		tcgplayer: 636439,
	},
};

export default card;
