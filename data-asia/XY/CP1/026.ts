import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマポインター",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「マグマ団」のポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］",
	},

	attacks: [
		{
			name: { ja: "マグマポインター" },
			cost: ["Fighting"],
			effect: {
				ja: "相手のポケモンを1匹選び、20ダメージ。［ベンチは弱点・抵抗力の計算をしない。］",
			},
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563746,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
