import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "レスキュータンカ",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュにあるポケモンを1枚、相手に見せてから、手札に加える。または、自分のトラッシュにあるポケモンを3枚、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560130,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
