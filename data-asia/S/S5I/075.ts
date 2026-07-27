import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "いちげきウーラオスV",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とぎすます" },
			cost: ["Fighting"],
			effect: {
				ja: "自分の山札から[闘]エネルギーを2枚まで選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "インパクトブロー" },
			damage: 180,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「インパクトブロー」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538578,
				tcgplayer: 569024,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [892],
};

export default card;
