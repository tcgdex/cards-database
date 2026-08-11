import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ネクロズマ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "エネルギーとなる 光を 求めて 暴れる 姿は どこか 苦しげ。 別の 世界の 存在 らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バリアアタック" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "スペシャルレーザー" },
			damage: "100+",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンに特殊エネルギーがついているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557004,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [800],
};

export default card;
