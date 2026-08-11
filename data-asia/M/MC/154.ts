import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラex",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "おうのごうれい" },
			cost: ["Water"],
			effect: {
				ja: "自分のトラッシュから[W]ポケモンを3枚まで選び、ベンチに出す。",
			},
		},
		{
			name: { ja: "ハイドロポンプ" },
			damage: "50+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[W]エネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863450,
			},
		},
	],

	evolveFrom: {
		ja: "シードラ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [230],

	suffix: "EX",
};

export default card;
