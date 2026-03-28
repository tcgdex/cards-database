import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ホミカの演奏",
	},

	illustrator: "Nobusawa/Mochipuyo",
	category: "Trainer",

	effect: {
		ja: "次の相手の番、相手のどくのポケモンは、にげられない。（新しくどくにしたポケモンもふくむ。） サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
