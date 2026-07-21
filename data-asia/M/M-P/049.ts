import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "逆境ほけん",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンの弱点のタイプと、相手のバトルポケモンのタイプが同じなら、このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、自分の山札を3枚引く。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
