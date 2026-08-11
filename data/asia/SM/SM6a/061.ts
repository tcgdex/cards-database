import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ハイドロポンプ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数x50ダメージ追加。",
			},
		},
		{
			name: { ja: "ぎゃくふんしゃ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "メイルストロムGX" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ40ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559393,
			},
		},
	],

	evolveFrom: {
		ja: "シードラ",
	},

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [230],

	suffix: "GX",
};

export default card;
