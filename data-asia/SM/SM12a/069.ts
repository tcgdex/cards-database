import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ランドロス",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "ランドロスが 訪れる 土地は 作物が たくさん 実るため 畑の神様 と 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょくげきだん" },
			cost: ["Fighting"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "パワーサイクロン" },
			damage: 60,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543911,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [645],
};

export default card;
