import { Card } from "models/database/card";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダブルマグマエネルギー",
	},

	illustrator: "5ban Graphics",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは「マグマ団」のポケモンにしかつけられず、つけた番の終わりにトラッシュする。このカードはポケモンについているかぎり、[闘]エネルギー2個ぶんとしてはたらく。（このカードが「マグマ団」のポケモン以外についているなら、トラッシュする。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563754,
			},
		},
	],

	rarity: "Uncommon",
};

export default card;
