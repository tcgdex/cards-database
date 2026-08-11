import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ソルガレオ",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'ja-jp': "別世界に 棲むと いわれる。 全身から 激しい光を 放ち 闇夜も 真昼のように 照らすのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "シャイニングアロー" },
			cost: ["Metal", "Colorless"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "にちりんのキバ" },
			damage: 170,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「にちりんのキバ」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560102,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コスモウム",
	},

	retreat: 3,
	rarity: "None",
	dexId: [791],
};

export default card;
