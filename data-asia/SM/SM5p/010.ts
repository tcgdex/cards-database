import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "パルキアGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くうかんせいぎょ" },
			cost: ["Water"],
			effect: {
				ja: "自分のベンチポケモンについているエネルギーを好きなだけ、このポケモンにつけ替える。",
			},
		},
		{
			name: { ja: "ハイドロプレッシャー" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数x20ダメージ追加。",
			},
		},
		{
			name: { ja: "ゼロバニッシュGX" },
			damage: 150,
			cost: ["Water", "Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーを、すべて山札にもどして切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559760,
			},
		},
	],

	retreat: 3,
	rarity: "Double rare",
	dexId: [484],

	suffix: "GX",
};

export default card;
