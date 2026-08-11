import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤトウモリ",
	},

	illustrator: "Yusuke Ohmura",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "オスは メスの ほぼ いいなり。 獲った エサも ほとんど 貢ぐので 栄養不足で 進化 できない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くさをもやす" },
			damage: 10,
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンについている[草]エネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543521,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [757],
};

export default card;
