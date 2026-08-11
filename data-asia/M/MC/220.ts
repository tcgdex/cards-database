import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘイラッシャex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おおなみがえし" },
			damage: "30+",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
		{
			name: { ja: "ダイナミックダイブ" },
			damage: "120+",
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、120ダメージ追加。その場合、このポケモンにも50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863516,
			},
		},
	],

	retreat: 4,
	regulationMark: "I",
	rarity: "None",
	dexId: [977],

	suffix: "EX",
};

export default card;
