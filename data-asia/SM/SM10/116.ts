import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "トリプル加速エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、進化ポケモンにしかつけられず、つけた番の終わりにトラッシュする。このカードはポケモンについているかぎり[無]エネルギー3個ぶんとしてはたらく。（このカードが進化ポケモン以外についているなら、トラッシュする。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557474,
			},
		},
	],

	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
