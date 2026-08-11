import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "密漁で 絶滅寸前に。 大切に 保護 された 結果 逆に 増え過ぎてきたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アクアバレット" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ハイドロポンプ" },
			damage: "70+",
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
				cardmarket: 559262,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [131],
};

export default card;
