import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "メガミミロップ&プリンGX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジャンピングバルーン" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の場の「ポケモンGX・EX」の数×60ダメージ追加。",
			},
		},
		{
			name: { ja: "パフスマッシャーGX" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。追加でエネルギーが4個ついているなら、相手のベンチポケモン1匹に、200ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554964,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [428, 39],

	suffix: "TAG TEAM-GX",
};

export default card;
