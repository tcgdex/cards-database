import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ペパーのリククラゲ",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "森の奥に 集団で 暮らす コロニーを 作る。 よそ者が 近寄ることを ひどく 嫌う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっぱる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "とつげき" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863722,
			},
		},
	],

	evolveFrom: {
		ja: "ペパーのノノクラゲ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [949],
};

export default card;
