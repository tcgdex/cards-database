import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "のど元に 毒袋を 持つ。 のどを 鳴らすと たまった 毒は 練りこまれ 強力になる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくづき" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "ポイズンハイ" },
			damage: "80+",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンがどくなら、80ダメージ追加。その後、このポケモンのどくを回復する。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561023,
			},
		},
	],

	evolveFrom: {
		ja: "グレッグル",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [454],
};

export default card;
