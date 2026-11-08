import { Card } from "models/database/card";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピュール",
	},

	illustrator: "DOM",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札が5枚になるように、山札を引く。のぞむなら、山札を引く前に、自分の手札を好きなだけトラッシュする。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 868116,
		tcgplayer: 674425,
	},
};

export default card;