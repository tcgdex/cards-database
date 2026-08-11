import { Card } from "models/database/card";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ユカリ",
	},

	illustrator: "Susumu Maeya",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモン1匹のHPを「150」回復する。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 868080,
		tcgplayer: 674395,
	},
};

export default card;