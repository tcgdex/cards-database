import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ひふきやろう",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「基本エネルギー」を7枚まで選び、相手に見せて、手札に加える。そして山札を切る。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 850615,
		tcgplayer: 655884,
	},
};

export default card;