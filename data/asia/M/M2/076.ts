import { Card } from "models/database/card";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギーマの一手",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から7枚見て、その中からポケモンを1枚選び、ベンチに出す。残りのカードはすべてウラにして切り、山札の下にもどす。（最初の自分の番には使えない。） サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 850584,
		tcgplayer: 655855,
	},
};

export default card;