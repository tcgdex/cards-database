import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "フィリップ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
