import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "メイのはげまし",
	},

	illustrator: "Iori Suzuki",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。自分のトラッシュから基本エネルギーを2枚まで選び、自分の2進化ポケモン1匹につける。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",

	thirdParty: {
		cardmarket: 868125,
		tcgplayer: 674434,
	},
};

export default card;