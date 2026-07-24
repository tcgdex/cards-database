import { Card } from "../../../interfaces";
import Set from "../SM2L";

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
				cardmarket: 561452,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
