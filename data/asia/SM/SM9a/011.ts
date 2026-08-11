import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "キュレム",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "失った 体を 真実と 理想で 埋めてくれる 英雄を 待つ 氷の 伝説ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れいきをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[水]エネルギーを1枚、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ヘイルプリズン" },
			damage: 110,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーを2個トラッシュし、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558198,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [646],
};

export default card;
