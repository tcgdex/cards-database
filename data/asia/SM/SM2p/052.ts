import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カプ・レヒレGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アクアリング" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "ハイドロシュート" },
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[水]エネルギーを2個トラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "カプストームGX" },
			cost: ["Water"],
			effect: {
				'ja-jp': "相手のバトルポケモンと、ついているすべてのカードを、相手の山札にもどして切る。相手のベンチポケモンがいないなら、このワザは失敗。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561317,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [788],

	suffix: "GX",
};

export default card;
