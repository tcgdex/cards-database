import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ホミカの演奏",
	},

	illustrator: "Naomi Satō",
	category: "Trainer",
	trainerType: "Supporter",

	effect: {
		ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。",
	},

	variants: [{ type: "holo" }],

	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
