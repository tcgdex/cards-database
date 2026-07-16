import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジラーチGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "サイキックゾーン" },
			effect: {
				ja: "このポケモンがいるかぎり、おたがいの場の[超]タイプの弱点を持つポケモンが、ワザのダメージを受けるとき、弱点を計算しない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほしさがし" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札にあるエネルギーを1枚、自分の[超]ポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "スターシールドGX" },
			damage: 100,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "次の相手の番、このポケモンはワザのダメージや効果を受けない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 547086,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [385],

	suffix: "GX",
};

export default card;
