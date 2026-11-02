import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "トリプル加速エネルギー",
	},

	illustrator: "5ban Graphics",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、進化ポケモンにしかつけられず、つけた番の終わりにトラッシュする。このカードはポケモンについているかぎり[無]エネルギー3個ぶんとしてはたらく。（このカードが進化ポケモン以外についているなら、トラッシュする。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557449,
			},
		},
	],

	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
