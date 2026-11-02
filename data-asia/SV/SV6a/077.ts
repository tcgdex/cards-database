import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラex",
	},

	illustrator: "PLANETA Igarashi",
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
			type: "holo",
			thirdParty: {
				cardmarket: 773826,
				tcgplayer: 566328,
			},
		},
	],

	evolveFrom: {
		ja: "シードラ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [230],

	suffix: "EX",
};

export default card;
