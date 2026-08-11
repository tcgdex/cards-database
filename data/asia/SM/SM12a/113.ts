import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャルマー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "気に入らないと ツメを 立てるが たまに のどを 鳴らして 甘える 性格が 一部に 大人気だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねこびより" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。その後、このポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "びょんびょんテール" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の「ポケモンGX・EX」1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544201,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [431],
};

export default card;
