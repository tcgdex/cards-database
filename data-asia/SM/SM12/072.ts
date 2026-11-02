import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルトラネクロズマ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	description: {
		ja: "圧倒的な 光エネルギーを 吸収し 変化した 姿。 全身から レーザー光を 放つ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ウルトラバースト" },
			effect: {
				ja: "このポケモンは、相手のサイドの残り枚数が2枚以下でなければ、ワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほろびのかがやき" },
			damage: 170,
			cost: ["Psychic", "Metal"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554961,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [800],
};

export default card;
