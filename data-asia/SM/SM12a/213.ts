import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット&ヨノワールGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ナイトウォッチャー" },
			damage: 150,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "手の手札からオモテを見ないで2枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "ペイルムーンGX" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "の相手の番の終わりに、このワザを受けたポケモンはきぜつする。追加で[超]エネルギーが1個ついているなら、相手のバトルポケモンについているエネルギーを、すべてトラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 547081,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [709, 477],

	suffix: "TAG TEAM-GX",
};

export default card;
