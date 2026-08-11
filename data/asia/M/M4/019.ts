import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケルディオ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "戦う 覚悟を 決めたことで 全身に 気力が みなぎり ケルディオの 姿を 変えた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきぬける" },
			damage: 20,
			cost: ["Water"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "エネリフレクト" },
			damage: 70,
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876918,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [647],
};

export default card;
