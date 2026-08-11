import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキー&ダークライGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ブラックランス" },
			damage: 150,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のベンチにいる「ポケモンGX・EX」1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "デッドムーンGX" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札からトレーナーズを出して使えない。追加で[悪]エネルギーが5個ついているなら、相手のバトルポケモンをきぜつさせる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 547091,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [197, 491],

	suffix: "TAG TEAM-GX",
};

export default card;
