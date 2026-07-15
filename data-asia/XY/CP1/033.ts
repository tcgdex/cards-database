import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "ダブルアクアエネルギー",
	},

	illustrator: "5ban Graphics",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは「アクア団」のポケモンにしかつけられず、つけた番の終わりにトラッシュする。このカードはポケモンについているかぎり、[水]エネルギー2個ぶんとしてはたらく。（このカードが「アクア団」のポケモン以外についているなら、トラッシュする。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563753,
			},
		},
	],

	rarity: "Uncommon",
};

export default card;
