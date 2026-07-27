import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルガレオ",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		ja: "別世界に 棲むと いわれる。 全身から 激しい光を 放ち 闇夜も 真昼のように 照らすのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "シャイニングアロー" },
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "にちりんのキバ" },
			damage: 170,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「にちりんのキバ」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561567,
			},
		},
	],

	evolveFrom: {
		ja: "コスモウム",
	},

	retreat: 3,
	rarity: "None",
	dexId: [791],
};

export default card;
