import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング&ホエルオーGX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スーパースプラッシュ" },
			damage: 180,
			cost: ["Water", "Water", "Water", "Water", "Water"],
		},
		{
			name: { ja: "キングザブーンGX" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "追加で[水]エネルギーが7個ついているなら、相手のベンチポケモン全員にも、それぞれ100ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558297,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [129, 321],

	suffix: "TAG TEAM-GX",
};

export default card;
