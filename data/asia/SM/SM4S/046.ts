import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "カウンターキャッチャー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560358,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
