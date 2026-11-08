import { Card } from "models/database/card";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャンボアイス",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "エネルギーが3個以上ついている自分のバトルポケモンのHPを「80」回復する。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 850581,
		tcgplayer: 655852,
	},
};

export default card;