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

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 868118,
		tcgplayer: 674427,
	},
};

export default card;