import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッスルベルト",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンの残りHPが「30」以下でダメカンがのっているなら、このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+60」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559048,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
