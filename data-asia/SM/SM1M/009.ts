import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ニョロモ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "まだまだ 歩くのが 下手。 トレーナーに なったら 毎日 歩く 訓練を してあげよう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "ハイドロポンプ" },
			damage: "30+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561610,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [60],
};

export default card;
