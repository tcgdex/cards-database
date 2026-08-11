import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイヤー&サンダー&フリーザーGX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トリニティバーン" },
			damage: 210,
			cost: ["Fire", "Water", "Lightning", "Colorless"],
		},
		{
			name: { ja: "スカイレジェンドGX" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。追加で[炎][水][雷]エネルギーが1個ずつついているなら、相手のポケモン3匹に、それぞれ110ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557236,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [146, 145, 144],

	suffix: "TAG TEAM-GX",
};

export default card;
