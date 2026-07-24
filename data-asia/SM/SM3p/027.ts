import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ケルディオ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "海や 川など 水面を 走り 世界中を 駆け巡る。 美しい 水辺に 現れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すくいだす" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある[水]ポケモンを1枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "かくごのつるぎ" },
			damage: "20+",
			cost: ["Water", "Water"],
			effect: {
				ja: "相手のベンチポケモンの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560185,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [647],
};

export default card;
