import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "カミツルギ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "紙の ように 薄い 身体から 研がれた 刀に 似た 鋭さを 感じる ウルトラビーストだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダイキリ" },
			damage: "10+",
			cost: ["Grass"],
			effect: {
				ja: "自分のサイドの残り枚数が4枚なら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "みねうち" },
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543466,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "None",
	dexId: [798],
};

export default card;
