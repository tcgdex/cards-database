import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイアロー",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "羽は 火を 通さず 丈夫。 昔の 消防士の 服は ファイアローの 羽で できていた。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ねっぷう" },
			damage: 40,
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "フレアブリッツ" },
			damage: 100,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個トラッシュし、相手のベンチポケモン1匹にも、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557204,
			},
		},
	],

	evolveFrom: {
		ja: "ヒノヤコマ",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [663],
};

export default card;
