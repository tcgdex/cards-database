import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ギーマの一手",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から7枚見て、その中からポケモンを1枚選び、ベンチに出す。残りのカードはすべてウラにして切り、山札の下にもどす。（最初の自分の番には使えない。） サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 850613,
		tcgplayer: 655882,
	},
};

export default card;