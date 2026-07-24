import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ペパーのサンドウィッチ",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンのHPを「30」回復する。そのポケモンが「ペパーのポケモン」なら、回復するHPは「100」になる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863961,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
